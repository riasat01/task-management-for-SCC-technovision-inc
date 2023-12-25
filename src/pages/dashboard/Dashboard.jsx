import { useState } from "react";
import AddTask from "./dashboard-components/add-task/AddTask";
import Tasks from "./dashboard-components/tasks/Tasks";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../custom-hooks/use-axios-secure/useAxiosSecure";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import swal from "sweetalert";


const Dashboard = () => {
    const [todo, setTodo] = useState();
    const [ongoing, setOngoing] = useState();
    const [completed, setCompleted] = useState();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: tasks = {}, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/task/email/${user?.email}`);
                console.log(res?.data);
                setTodo(res?.data?.todo);
                setOngoing(res?.data?.ongoing);
                setCompleted(res?.data?.completed);
                return res?.data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    const addATask = task => {
        const info = {
            ...task,
            email: user?.email,
            created: new Date(),
            deadline: new Date(task?.deadline)
        }
        axiosSecure.post('/task', info)
            .then(res => {
                console.log(res);
                if (res?.status === 200) {
                    swal('Congratulation', 'Task added successfully', 'success');
                    refetch();
                    setTodo(tasks?.todo);
                    setOngoing(tasks?.ongoing);
                    setCompleted(tasks?.completed);
                } else {
                    swal('Error', 'Something went wrong', 'error');
                }
            })
            .catch(error => console.log(error));
        console.log(info);
    }

    const handleDrop = (e, ref) => {
        e?.preventDefault();
        const id =e.dataTransfer.getData('id');
        const formatedId = id?.slice(1, -1);
        const status = ref?.children[0]?.innerText;
        console.log(e?.target);
        console.log(ref?.children[0]?.innerText);
        console.log(e.dataTransfer.getData('id'));
        axiosSecure.put(`/task/status/${formatedId}`, {status: status})
        .then(res => {
            console.log(res?.data);
            refetch();
        })
        .catch(error => console.log(error));
    }


    return (
        <div className="mt-24">
            <section className="flex flex-col md:flex-row justify-center items-center">
                <img className="w-96 h-96 p-8 rounded-full" src={user?.photoURL} alt="" />
                <AddTask addATask={addATask}></AddTask>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-12 lg:px-24 mt-12">
                <Tasks handleDrop={handleDrop} tasks={todo} title='To-Do'></Tasks>
                <Tasks handleDrop={handleDrop} tasks={ongoing} title='Ongoing'></Tasks>
                <Tasks handleDrop={handleDrop} tasks={completed} title='Completed'></Tasks>
            </section>
        </div>
    );
};

export default Dashboard;