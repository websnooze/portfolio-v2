import { MTLModel } from "react-3d-viewer";

const Home3DViewer = () => {
  return (
    <div className="hero-3d-viewer">
      <MTLModel
        enableZoom={false}
        // position={{ x: 0, y: -100, z: 0 }}
        texPath="./src/lib/model/"
        mtl="../../../models/Character.obj"
        src="../../../models/Character.mtl"
      />
    </div>
  );
};

export default Home3DViewer;
