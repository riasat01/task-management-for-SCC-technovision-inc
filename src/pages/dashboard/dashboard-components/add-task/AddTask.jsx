import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


const AddTask = ({addATask}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return (
        <div className="px-8 md:px-0 w-full md:w-1/2 mx-auto">
            <form onSubmit={handleSubmit(addATask)} className="space-y-4">

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


                <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-pink-600 to-pink-400 text-lg font-semibold text-white border-2 hover:border-0 border-pink-500 hover:shadow-[1px_-1px_1rem_0px_pink] " type="submit" value="Add" />
            </form>
        </div>
    );
};

AddTask.propTypes = {
    addATask: PropTypes.func
}

export default AddTask;