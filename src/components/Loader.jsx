import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        display: "flex", flexDirection:"column", alignItems:"center"
      }}>
      
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}
        </p>
      </div>
    </Html>
  );
};

export default Loader;
