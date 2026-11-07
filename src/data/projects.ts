import { LuCog, LuUtilityPole, LuFan, LuGauge, LuWaves, LuSun, LuRocket, LuChartLine } from "react-icons/lu";
import type { ProjectsType } from "@/types/projects";

export const projects: ProjectsType = {
  items: [
    {
      id: `aimd`,
      title: `Advanced Integrated Motor Drive Technologies`,
      summary: `EPSRC project on sustainable, multi-sector electrification using advanced integrated motor drives.`,
      details: `Contributing to the EPSRC project Sustainable, Multi-sector Electrification using Advanced Integrated Motor Drive Technologies, investigating performance limits and design trade-offs for high-power-density electrical drives.`,
      partner: {
        name: `EPSRC / AIMD`,
        url: `https://www.aimd.ac.uk/`
      },
      years: `Apr 2026 - Present`,
      topic: `Motor Drives`,
      tools: [],
      links: [],
      previewImage: null,
      icon: LuCog,
      featured: false
    },
    {
      id: `direct`,
      title: `DIRECT: Dynamically Reconfigurable Power Converters for Net Zero Distribution Systems`,
      summary: `A full-power power multiplexer that injects power into the utility grid, with real-time control and network operation.`,
      details: `Dynamically Reconfigurable Power Converters for Enabling Net Zero Distribution Systems. Designing, building and testing a power multiplexer at full power ratings that injects power into the utility grid, and implementing the real-time control philosophy and network operational strategy.`,
      partner: {
        name: `Newcastle University`,
        url: null
      },
      years: `Aug 2025 - Present`,
      topic: `Energy Systems`,
      tools: [],
      links: [
        {
          name: `Paper (ECCE 2026, arXiv)`,
          url: `https://arxiv.org/abs/2609.06621`
        }
      ],
      previewImage: `/images/newcastle_university_logo.png`,
      previewFit: `contain`,
      icon: LuUtilityPole,
      featured: true
    },
    {
      id: `dyson-prosperity-partnership`,
      title: `Dyson Prosperity Partnership Project`,
      summary: `EPSRC Prosperity Partnership with Dyson on more efficient, smaller and more sustainable power systems, contributing ultra-high-speed sensorless CSI motor drives.`,
      details: `Researcher on the EPSRC Prosperity Partnership Dyson Future Power Systems Lab (EP/T005548/1), which takes a whole-system approach to making the power systems in domestic appliances more efficient, smaller, lighter and more sustainable. Developed, implemented and experimentally tested a xxx krpm sensorless motor-drive algorithm, breaking the world record for the n√P metric. Developed and tested two current source inverter (CSI) prototypes with 100 krpm motors: one using GaN devices and one using first engineering samples of bidirectional GaN (BiGaN) devices, the world's first BiGaN-based high-speed motor-drive implementation.`,
      partner: {
        name: `Dyson Efficient Power Systems Laboratory, Newcastle University / Dyson`,
        url: null
      },
      years: `Mar 2025 - Apr 2026`,
      topic: `Motor Drives`,
      tools: [],
      links: [
        {
          name: `EPSRC Grant EP/T005548/1 (UKRI GtR)`,
          url: `https://gtr.ukri.org/find-research-and-innovation/project/66d5d62f-0051-47e4-bd6e-af740f7e0652#overview`
        }
      ],
      previewImage: `/images/dyson_logo.svg`,
      previewFit: `contain`,
      icon: LuFan,
      featured: false
    },
    {
      id: `csi-motor-drives`,
      title: `CSI Motor Drives for Ultra-High-Speed Electrical Machines`,
      summary: `GaN and bidirectional GaN current source inverters with sensorless control, including a world-record xxx krpm drive and the first BiGaN-based high-speed motor drive.`,
      details: `PhD research with Dyson on current source inverter (CSI) drive solutions for ultra-high-speed machines. Developed, implemented and experimentally tested a xxx krpm sensorless motor-drive algorithm, breaking the world record for the n√P metric. Built and tested two CSI prototypes with 100 krpm motors: one using GaN devices and one using first engineering samples of bidirectional GaN (BiGaN) devices, the world's first BiGaN-based high-speed motor-drive implementation. Work also covers board design, switching-loss evaluation, C2000 (TMS320F2837xD) software, high-speed machine loss analysis, novel CSI modulation, and CSI-VSI comparison.`,
      partner: {
        name: `Dyson`,
        url: `https://research.ncl.ac.uk/electric-propulsion/`
      },
      years: `Sep 2022 - Present`,
      topic: `Motor Drives`,
      tools: [
        `Altium`,
        `PLECS`,
        `SPICE`,
        `MATLAB/Simulink`,
        `C2000 MCUs`
      ],
      links: [
        {
          name: `Paper (JESTPE 2026)`,
          url: `https://doi.org/10.1109/JESTPE.2026.3692437`
        },
        {
          name: `Paper (ICEM 2026)`,
          url: `https://doi.org/10.1109/ICEM68283.2026.11757463`
        }
      ],
      previewImage: `/images/high_speed_motor.jpg`,
      previewPosition: `72% 50%`,
      icon: LuGauge,
      featured: true
    },
    {
      id: `hydro-refurbishment`,
      title: `Refurbishment of a 70+ Year Old Hydroelectric Power Plant`,
      summary: `Electrical machine analysis and design support for the lifetime extension of ageing hydro-generators.`,
      details: `Lifetime extension of ageing hydroelectric generators. Contributions included the conversion from diamond coils to Roebel bars, including slot number and geometry updates, and an efficiency improvement of 0.2%, corresponding to a 100 kW loss reduction.`,
      partner: {
        name: `EUAS`,
        url: `https://www.euas.gov.tr/en-US`
      },
      years: `Sep 2021 - Sep 2023`,
      topic: `Energy Systems`,
      tools: [
        `ANSYS Maxwell`,
        `COMSOL Multiphysics`
      ],
      links: [
        {
          name: `Local News`,
          url: `https://www.aa.com.tr/tr/bilim-teknoloji/turkiyedeki-barajlarin-kalbine-yerli-yuksek-teknoloji-yerlestiriliyor/2876185`
        },
        {
          name: `International News`,
          url: `https://ukmagsoc.org/wp-content/uploads/2024/01/MagNews-3-2023-cover.jpg`
        }
      ],
      previewImage: `/images/hydro_generator_refurbishment.jpg`,
      icon: LuWaves,
      featured: false
    },
    {
      id: `pv-dcdc-converter`,
      title: `20 kW DC-DC Converter Design for a 160 kW String PV Inverter`,
      summary: `Inductor optimisation with PWM loss models and thermal-electromagnetic FEM for a PV inverter DC-DC stage.`,
      details: `TUBITAK 1004 project: a 20 kW DC-DC converter design for a 160 kW string PV inverter. Inductors were optimised using PWM loss models and coupled thermal-electromagnetic finite element computations.`,
      partner: {
        name: `ODTU-GUNAM, TESCOM, TUBITAK-MAM`,
        url: null
      },
      years: `Sep 2021 - Sep 2022`,
      topic: `Energy Systems`,
      tools: [
        `COMSOL Multiphysics`,
        `MATLAB`
      ],
      links: [],
      previewImage: null,
      icon: LuSun,
      featured: false
    },
    {
      id: `electromagnetic-launchers`,
      title: `Design and Analysis of 10 MJ Electromagnetic Launchers`,
      summary: `Railgun and pulse power supply design (>2 MA, 6.5 kV, 8 MJ); the third prototype generation holds the world efficiency record.`,
      details: `Electromagnetic launcher (railgun) and pulse power supply design with >2 MA rail currents, 6.5 kV and 8 MJ, plus armature optimisation. Four prototype generations were built; the third holds the world efficiency record, with muzzle speeds above 2000 m/s. The work used coupled electromagnetic and thermal multiphysics finite element models, including velocity skin effect and lamination modelling.`,
      partner: {
        name: `ASELSAN Inc.`,
        url: `https://www.aselsan.com/en`
      },
      years: `Sep 2019 - Sep 2022`,
      topic: `Electromagnetic Systems`,
      tools: [
        `COMSOL Multiphysics`,
        `MATLAB`
      ],
      links: [
        {
          name: `Defence Turkey`,
          url: `https://www.defenceturkey.com/en/content/muzzle-energy-record-from-tufan-electromagnetic-railgun-system-3845`
        },
        {
          name: `Anadolu Agency`,
          url: `https://www.aa.com.tr/en/economy/turkish-defense-firms-gun-breaks-ultrasonic-records/1219753`
        },
        {
          name: `YouTube`,
          url: `https://www.youtube.com/watch?v=Ct7TuU8m9lY&ab_channel=arronlee33`
        }
      ],
      previewImage: `/images/electromagnetic_launcher.jpg`,
      icon: LuRocket,
      featured: true
    },
    {
      id: `solar-forecasting`,
      title: `Solar Power Generation Analysis and Forecasting Using ANNs`,
      summary: `Machine learning models for cost-effective solar power forecasting from real-world data.`,
      details: `Models targeting reliability challenges in solar power generation and cost-effective solar power forecasting. The work applied machine learning models, including LSTM and autoregressive CNN methods, to real-world generation data.`,
      partner: {
        name: `Middle East Technical University`,
        url: null
      },
      years: `May 2018 - May 2019`,
      topic: `Forecasting`,
      tools: [
        `Python`,
        `TensorFlow`
      ],
      links: [
        {
          name: `Paper (SEST 2020)`,
          url: `https://doi.org/10.1109/SEST48500.2020.9203124`
        }
      ],
      previewImage: null,
      icon: LuChartLine,
      featured: false
    }
  ]
};