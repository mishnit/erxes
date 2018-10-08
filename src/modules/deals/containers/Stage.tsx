import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';
import { borderRadius, colors, grid } from '../constants';
import { IDeal, IStage } from '../types';
import DealList from './DealList';
import Title from './Title';

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styledTS<{ isDragging: boolean }>(styled.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? colors.blue.lighter : colors.blue.light};
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${colors.blue.lighter};
  }
`;

type Props = {
  stage: IStage;
  deals: IDeal[];
};

export default class Column extends React.Component<Props> {
  render() {
    const { stage, deals } = this.props;

    return (
      <Draggable draggableId={stage.name} index={stage._id}>
        {(provided, snapshot) => (
          <Container innerRef={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {stage.name}
              </Title>
            </Header>
            <DealList listId={stage._id} listType="DEAL" deals={deals} />
          </Container>
        )}
      </Draggable>
    );
  }
}
