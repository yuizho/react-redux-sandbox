import React, { FC } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

import "../App.css";

export interface CounterProps {
  count?: number;
  decrement?: () => void;
  increment?: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default Counter;
