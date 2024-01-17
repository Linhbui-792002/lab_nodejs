let data = [
  {
    id: 1,
    title: "Digital Transformation - Chuyển Đổi Số",
    author: "Lindsay Herbert",
    images: [
      { id: 1, url: "/1.png", caption: "Digital Transformation" },
      { id: 2, url: "/2.png", caption: "Digital Transformation 1" },
      { id: 3, url: "/3.png", caption: "Digital Transformation 2" },
    ],
    comments: [1, 2, 3],
    category: 1,
  },
  {
    id: 2,
    title: "Big Data - Dữ Liệu Lớn",
    author: "Lars Rinnan",
    images: [
      { id: 4, url: "/4.png", caption: "Big Data" },
      { id: 5, url: "/5.png", caption: "Big Data 1" },
      { id: 6, url: "/6.png", caption: "Big Data 2" },
    ],
    comments: [4, 5, 6, 7],
    category: 2,
  },
  {
    id: 3,
    title: "Cuộc Cách Mạng Blockchain",
    author: "Don & Alex Tapscott",
    images: [
      { id: 7, url: "/7.png", caption: "Cuộc Cách Mạng Blockchain" },
      { id: 8, url: "/8.png", caption: "Cuộc Cách Mạng Blockchain 1" },
      { id: 9, url: "/9.png", caption: "Cuộc Cách Mạng Blockchain 2" },
    ],
    comments: [8, 9],
    category: 1,
  },
];

const getAllTutorials = async (req, res) => {
  const total = data.length;
  try {
    res.status(200).json({
      message: "Get all Tutorials",
      data: data,
      total: total,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

const getTutorialsById = async (req, res) => {
  try {
    const dataFind = data.find((item) => item.title == req.params.title);
    if (dataFind) {
      res.status(200).json(dataFind);
    } else {
      res.status(404).json({
        message: `Title ${req.params.title} not found`,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};

const createTutorial = async (req, res) => {
  try {
    const dataBody = req.body;
    console.log(dataBody, "dataBody");
    data.push(dataBody);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.toString(),
    });
  }
};
export { getAllTutorials, getTutorialsById, createTutorial };
