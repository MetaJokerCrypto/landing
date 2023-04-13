import React from 'react';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';
import Roadmap from 'components/Roadmap/Roadmap';

const RoadmapBlock = () => (
  <>
    <Heading type="h2">Roadmap</Heading>
    <RegularText>Основные этапы развития, которые мы для себя ставим на данный момент.</RegularText>
    <Roadmap />
  </>
);

export default RoadmapBlock;
