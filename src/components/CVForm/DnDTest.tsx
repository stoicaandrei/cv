import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { SidebarItem } from 'types';

type Props = {
  items: SidebarItem[];
};

const DnDTest = ({ items }: Props) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="dropple">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable
                key={item.title}
                draggableId={item.title}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.title}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DnDTest;
