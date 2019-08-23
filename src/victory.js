import React from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryStack } from "victory";

export const VictoryExample = () => {
  return (
    <>
      <VictoryChart height={1000} width={500} horizontal={true}>
        <VictoryGroup
          standalone={false}
          offset={20}
          style={{ data: { width: 10 } }}
          horizontal={true}
        >
          {[...Array(10).keys()].map(index => (
            <VictoryStack colorScale={"blue"} horizontal={true}>
              {[...Array(10).keys()].map(index => (
                <VictoryBar data={generateFakeData(10, 5)} />
              ))}
            </VictoryStack>
          ))}
        </VictoryGroup>
      </VictoryChart>
    </>
  );
};

const generateFakeData = (n, range) =>
  [...Array(n).keys()].map(index => ({
    x: index + 1,
    y: Math.random() * range
  }));
