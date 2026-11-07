import { LuUtilityPole, LuGauge, LuRocket } from "react-icons/lu";

export const projectsFeatured = {
  items: [
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
      icon: LuUtilityPole
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
      icon: LuGauge
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
      icon: LuRocket
    }
  ]
};