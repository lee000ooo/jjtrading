export interface ProductSpec {
  name: string;
  intro: string;
  features: string[];
  application: string;
  specs?: { label: string; value: string }[];
}

export interface ProductCategory {
  id: string;
  icon: string;
  products: ProductSpec[];
}

export const partnerProducts: ProductCategory[] = [
  {
    id: "consumables",
    icon: "factory",
    products: [
      {
        name: "Polyurethane Brush Polishing Disc",
        intro: "聚氨酯刷抛光轮，尺寸和颜色可根据客户要求定制。",
        features: [
          "高低两种不同齿轮形状，可用于产品平面和异形结构（如凹坑和R角）的研磨",
          "使用寿命长，加工CT短，弹性、韧性及耐磨性强",
          "不易刮伤，研磨力强，加工纹路细腻均匀，有助于后续表面处理",
          "可配合抛光液一起使用",
        ],
        application: "适用于玻璃、铝合金、不锈钢、陶瓷等材料的抛光，主要包括2.5D玻璃、3D玻璃及异形金属件",
        specs: [
          { label: "材质", value: "3C产品合金/玻璃面板" },
          { label: "分类", value: "聚氨酯刷抛光轮" },
          { label: "外径", value: "780×180 mm" },
          { label: "厚度", value: "33.0±1.0 mm" },
          { label: "硬度", value: "68-88 HC" },
          { label: "深加工", value: "一对一定制" },
        ],
      },
      {
        name: "PU Sandpaper",
        intro: "PU砂纸，以聚氨酯和磨料制成，具有强弹性、韧性、耐水解性和耐磨性。",
        features: [
          "配合水使用，减少粉尘，安全环保",
          "研磨纹路均匀稳定，相比传统砂纸使用寿命更长",
          "背面可贴自粘贴或绒布，装夹便捷，生产效率高",
          "具有自锐性能，脱落均匀",
        ],
        application: "主要适用于铝合金、锌合金等金属3C产品以及家电、五金制品的表面研磨",
        specs: [
          { label: "材质", value: "3C产品合金材料" },
          { label: "外径", value: "80-300 mm" },
          { label: "内径", value: "12-50 mm" },
          { label: "厚度", value: "10-50 mm" },
          { label: "粒度", value: "320-1500#" },
          { label: "硬度", value: "50-90 HA" },
        ],
      },
      {
        name: "Resin Grinding Wheel",
        intro: "树脂研磨轮，通过树脂结合剂、碳化硅和金刚石等材料压缩模塑成型。",
        features: [
          "硬度适中，锋利度高，自锐性能好，仿形性好",
          "无黑边、不粘屑、修整频率少",
          "兼具研磨和抛光特性",
        ],
        application: "适用于不锈钢、钛合金等3C产品的表面处理，可实现3D轮廓加工，主要用于去除产品表面刀纹",
        specs: [
          { label: "材质", value: "3C产品合金材料" },
          { label: "外径", value: "80-300 mm" },
          { label: "内径", value: "12-50 mm" },
          { label: "厚度", value: "10-50 mm" },
          { label: "粒度", value: "320-1500#" },
          { label: "硬度", value: "50-90度" },
        ],
      },
      {
        name: "Cerium Oxide Polished Leather",
        intro: "氧化铈抛光皮，表面具有微细毛孔，储液性强，不易刮伤产品。",
        features: [
          "表面微细毛孔储液性强，不轻易刮伤产品",
          "相比传统中抛光皮，表面纹路均匀，使用寿命和效率高",
          "弹性强、韧性好、耐水解、耐磨、自锐性好、脱落均匀",
          "微孔硬质泡沫塑料弹性体对3C产品前后盖玻璃材料有良好研磨抛光效果",
        ],
        application: "适用于光学镜片、手机底板玻璃、铝合金/钛合金手机外壳的抛光",
        specs: [
          { label: "材质", value: "3C产品玻璃/合金材料" },
          { label: "外径", value: "380-1170 mm" },
          { label: "内径", value: "400 mm" },
          { label: "厚度", value: "1.0-4.0 mm" },
          { label: "硬度", value: "65-92度" },
        ],
      },
    ],
  },
  {
    id: "chemicals",
    icon: "flask",
    products: [
      {
        name: "Titanium Alloy Polishing Liquid Series",
        intro: "针对钛合金材料研发的系列抛光液，含粗抛、中抛、精抛三种规格。",
        features: [
          "粗抛液：含表面活性剂、脂肪酸、沉降剂、螯合剂，有效增加润滑冷却和防锈性能",
          "中抛液：以改性氧化铝微粉为磨料，分散均匀，硬度适中，沉降后不硬化结块",
          "精抛液：以纳米级高纯氧化铝为磨料，化学和物理去除达到良好平衡",
          "去除量好，可达镜面效果，无抛光橘皮、凹坑等缺陷",
        ],
        application: "适用于钛合金材料的精密抛光加工",
      },
      {
        name: "Metal Working Fluid",
        intro: "环保型金属加工液，不含氯、磷等极压添加剂及酚类、亚硝酸盐等化合物。",
        features: [
          "安全环保：不含氯、磷等极压添加剂及酚类、亚硝酸盐、三嗪等化合物",
          "生物稳定性好：有效防止细菌和真菌侵蚀，使用寿命长",
          "优异的防锈性能，冷却性能和润滑性能良好平衡",
          "有效提高加工效率，延长刀具寿命",
        ],
        application: "适用于不锈钢、铝合金、铜、铁、锌镁合金及多数非金属材料的车削、钻孔、攻丝、铰孔、磨削等加工",
      },
      {
        name: "Semiconductor Polishing Liquid",
        intro: "半导体抛光液，以金刚石、氧化铝、硅溶胶等为主要成分，具有良好分散性和高纯度。",
        features: [
          "良好分散性和高纯度，有效减少对电子产品的污染",
          "优异化学配方，实现高抛光速率和高加工平滑度",
          "分粗抛、中抛和精抛三种规格，可根据客户要求定制",
        ],
        application: "适用于蓝宝石、硅、SiC、GaN芯片等基板抛光",
      },
    ],
  },
  {
    id: "equipment",
    icon: "building",
    products: [
      {
        name: "Adaptive Six-Axis / Five-Axis Polishing Machine",
        intro: "自适应六轴/五轴抛光机，配备力控系统，适用于精密抛光加工。",
        features: [
          "力控范围0-1000N，精度高",
          "XYZ轴重复定位精度±0.02mm",
          "C轴360°连续旋转，适应复杂曲面加工",
          "可选单力控或双力控配置",
        ],
        application: "适用于3C产品外壳、中框等复杂曲面的精密抛光",
        specs: [
          { label: "型号", value: "DLK-D96 / DLK-D95 / SLK-D86" },
          { label: "外形尺寸", value: "4025×4000×3105 mm (max)" },
          { label: "电源", value: "三相380V / 19-31.5 KW" },
          { label: "设备重量", value: "4100-5200 kg" },
          { label: "工位数量", value: "3/4/5" },
          { label: "力控范围", value: "0-1000 N" },
        ],
      },
      {
        name: "Polishing & Lapping Machines",
        intro: "单面抛光机、双面抛光机、水平流体机、立式流体抛光机等系列设备。",
        features: [
          "单面抛光机：2000kg，主轴三相380V 2.2kW，抛光盘转速0-100rpm",
          "双面抛光机：1800kg，4kW电机，适用于批量精密加工",
          "流体抛光机：适用于复杂内腔和精密表面的流体抛光",
          "玻璃抛光机：配备自动上下料功能，支持多片同时加工",
        ],
        application: "适用于光学玻璃、精密零部件、3C产品等的平面和曲面抛光",
      },
    ],
  },
];
