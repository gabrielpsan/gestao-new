import React from 'react';

import { Container, OptionText, CheckLine } from './styles';

interface PropsSelect{
    textLabel: string
    posts: any
    // options: []
}

const Option: React.FC<PropsSelect> = ({ textLabel, posts }) => {

    return (
      <Container>
          <OptionText>
            <div className="titleOption">
                <label htmlFor="">{textLabel}</label>
            </div>
            <CheckLine>
              <input type="checkbox"/>
              <label>{posts.map(() => <p>{posts.title}</p>)}</label>
            </CheckLine>
          </OptionText>
      </Container>
  );
}

export default Option;