import React from "react";

const ShrimpModel = ({ baseScene, modelOffset }) => (
    <primitive object={baseScene.clone()} position={modelOffset} dispose={null} />
);

export default ShrimpModel;