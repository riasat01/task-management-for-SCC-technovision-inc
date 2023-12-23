import PropTypes from 'prop-types';

const Completed = ({ tasks, title }) => {
    return (
        <div>
            <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
            {
                tasks?.map(task => (
                    <div key={task?._id} className="collapse collapse-plus bg-base-200 text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            {task?.title}
                        </div>
                        <div className="collapse-content">
                            <p>{task?.description}</p>
                        </div>
                    </div>)
                )
            }
        </div>
    );
};

Completed.propTypes = {
    tasks: PropTypes.array,
    title: PropTypes.string
}

export default Completed;