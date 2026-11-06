import { LuAtom, LuMagnet, LuActivity, LuZap, LuChartSpline, LuCircuitBoard, LuCpu, LuCode, LuBrainCircuit, LuLanguages } from "react-icons/lu";

export const skills = {
  "Simulation & Design": [
    {
      name: `COMSOL Multiphysics`,
      icon: LuAtom,
      proficiency: `Coupled electromagnetic & thermal FEM`,
      description: `Used for launcher, hydro-generator and inductor design studies, including velocity skin effect and lamination modelling.`
    },
    {
      name: `ANSYS Maxwell`,
      icon: LuMagnet,
      proficiency: `Electrical machine FEM`,
      description: `Used in the refurbishment and rewinding of a 70+ year old hydroelectric generator.`
    },
    {
      name: `PLECS`,
      icon: LuActivity,
      proficiency: `Converter & drive simulation`,
      description: `Virtual prototyping and CSI/VSI topology comparisons for ultra-high-speed motor drives.`
    },
    {
      name: `SPICE`,
      icon: LuZap,
      proficiency: `Device & switching-loss analysis`,
      description: `Switching behaviour and loss evaluation of GaN and bidirectional GaN devices.`
    },
    {
      name: `MATLAB / Simulink`,
      icon: LuChartSpline,
      proficiency: `Modelling, control & optimisation`,
      description: null
    }
  ],
  "Hardware & Embedded": [
    {
      name: `Altium Designer`,
      icon: LuCircuitBoard,
      proficiency: `Power-converter PCB design`,
      description: `Board design for GaN and bidirectional GaN current source inverter prototypes.`
    },
    {
      name: `TI C2000 / Code Composer Studio`,
      icon: LuCpu,
      proficiency: `Digital motor control`,
      description: `Sensorless control, modulation and analog/digital sensing on TMS320F2837xD microcontrollers.`
    }
  ],
  Programming: [
    {
      name: `Python`,
      icon: LuCode,
      proficiency: `Data analysis & forecasting`,
      description: null
    },
    {
      name: `TensorFlow`,
      icon: LuBrainCircuit,
      proficiency: `LSTM & autoregressive CNN models`,
      description: `Solar power generation forecasting on real-world data.`
    }
  ],
  Language: [
    {
      name: `Turkish`,
      icon: LuLanguages,
      proficiency: `Native`,
      description: null
    },
    {
      name: `English`,
      icon: LuLanguages,
      proficiency: `C1`,
      description: null
    }
  ]
};