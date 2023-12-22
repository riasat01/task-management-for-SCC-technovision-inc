import { useForm } from "react-hook-form";
import useAuth from "../../../../custom-hooks/use-auth/useAuth";
import useAxiosSecure from "../../../../custom-hooks/use-axios-secure/useAxiosSecure";
import swal from "sweetalert";


const AddTask = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();
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
            swal('Congratulation', 'Task added successfully', 'success');
        })
        .catch(error => console.log(error));
        console.log(info);
    }
    return (
        <div className="px-8 md:px-0 w-full md:w-1/2 mx-auto">
            <form onSubmit={handleSubmit(addATask)} className="space-y-4">
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input defaultValue="test" {...register("example")} /> */}

                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-70" type="text" name="" placeholder="title" {...register("title", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <textarea className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-70" name="description" placeholder="description" {...register("description", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-70" type="date" name="deadline" placeholder="deadline" {...register("deadline", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50 text-white" name="priority" placeholder="Priority" {...register("priority", { required: true })}>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select>
                {errors.exampleRequired && <span>This field is required</span>}
                <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50 text-white" name="status" placeholder="Status" {...register("status", { required: true })}>
                    <option value="To-Do">To-Do</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
                {errors.exampleRequired && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-pink-600 to-pink-400 text-lg font-semibold text-white border-2 hover:border-0 border-pink-500 hover:shadow-[1px_-1px_1rem_0px_pink] " type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddTask;