import PropTypes from 'prop-types';
import { useRef } from 'react';

const Completed = ({ tasks, title, handleDrop }) => {
    const divRef= useRef();

    const handleDragStart = (id, e) => {
        e.dataTransfer.setData('id', JSON.stringify(id));
    }
    
    return (
        <div ref={divRef} onDrop={(e) => handleDrop(e, divRef?.current)} onDragOver={(e) => {e?.preventDefault()}}>
            <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
            {
                tasks?.map(task => (
                    <div draggable onDragStart={(e) => handleDragStart(task?._id,  e)} key={task?._id} className="collapse collapse-plus bg-base-200 text-white mb-4">
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
    title: PropTypes.string,
    handleDrop: PropTypes.func
}

export default Completed;