import { dimensions } from 'modules/common/styles';
import { __ } from 'modules/common/utils';
import * as React from 'react';
import styled from 'styled-components';

const MainDescription = styled.div`
  max-width: 610px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  font-size: 12px;

  h4 {
    margin: 0;
    padding-bottom: 5px;
  }
`;

const DescImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: ${dimensions.coreSpacing}px;
`;

type Props = {
  icon: string;
  title: string;
  description: string;
};

class HeaderDescription extends React.PureComponent<Props> {
  render() {
    const { icon, title, description } = this.props;

    return (
      <MainDescription>
        <DescImg src={icon} />
        <span>
          <h4>{__(title)}</h4>
          {__(description)}
        </span>
      </MainDescription>
    );
  }
}

export default HeaderDescription;
