import React from "react";

const ShrimpModel = ({ baseScene, modelOffset }) => (
    <primitive object={baseScene.clone()} position={modelOffset} />
);

export default ShrimpModel;