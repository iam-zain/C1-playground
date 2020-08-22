import React from "react";

import { Slider } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

import { SliderStateClassMap, Marks4PointsOE } from "utils/utils";
import StyledSlider4Points from "./style";

const Slider4Points = ({
  value,
  onChange,
  name,
  status,
  id,
  showModalWithData,
  infoModalKey,
}) => {
  const [value1, setValue] = React.useState(1);
  return (
    <StyledSlider4Points className={SliderStateClassMap[value1]} id={id}>
      <div className="factor-name p5">{name}</div>
      <div className="status">{status}</div>
      <QuestionCircleFilled
        className="info-icon"
        onClick={() => showModalWithData({ infoModalKey })}
      />

      <Slider
        range
        max={1}
        min={-2}
        value={[value1]}
        included={true}
        onChange={(z) => setValue(z[0])}
        marks={Marks4PointsOE}
      />
    </StyledSlider4Points>
  );
};

export default Slider4Points;
