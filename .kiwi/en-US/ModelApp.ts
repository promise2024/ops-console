export default {
  zhiNengTiXiangQing: 'Agent Detail',
  zheShiYiDuanShi: 'This is a voice demo using OpenAI TTS',
  yuYinBoBao: 'Voice Broadcast',
  yuYinFengGe: 'Voice Style',
  yuSu: 'Voice Speed',
  qingXuanZeYuYin: 'Select a speech model',
  yuYinMoXing: 'Speech Model',
  yuYinBoBaoPei: 'TTS Configuration',
  baoXiaoZhiShiKu: 'Reimbursement Knowledge Base q',
  baoXiaoZhiShiKu2: 'Reimbursement Knowledge Base w',
  kaoQinZhiShiKu: 'Attendance Knowledge Base 2',
  baoXiaoZhiShiKu3: 'Reimbursement Knowledge Base',
  kaoQinZhiShiKu2: 'Attendance Knowledge Base',
  qingShuRuDuiHua: 'Input the prologue',
  ninHaoWoShiKao: 'Hello, I am the Attendance Knowledge assistant. How can I assist you today?',
  duiHuaKaiChangBai: 'Prologue',
  meiYouSouSuoDao: 'This will be provided if no suitable content is found.',
  zuiDuoKeShuRu: 'Maximum input of 200 characters allowed.',
  kongSouSuoHuiFu: 'Empty search response',
  weiZhaoDaoNinXun: 'The content you requested was not found，provide more details of your question.',
  danCiSouSuoPi: 'Maximum number of answers to match ranging from [1, 10].',
  yinYongShangXian: 'Reference Limit',
  piPeiYongHuWen: 'Minimum similarity threshold for matching user questions, ranging from [0, 1]. A lower threshold leads to more divergent content matches, while a higher threshold results in more precise content matches. Different knowledge bases may have different minimum similarity thresholds, so it is recommended to configure an appropriate threshold based on the specific knowledge base.',
  zuiDiXiangSiDu: 'Minimum Similarity',
  zhiShiKuGaoJi: 'Advanced Configuration of Knowledge Base',
  xuanZeZhiShiKu: 'Select Knowledge Base',
  tianJia: 'Add',
  moXingFuWu: 'Model Service',
  qingXuanZeMoXing: 'Select a model',
  qingXuanZeMoXing2: 'Select a model service',
  kongZhiAIDui:'Control the maximum number of tokens in AI conversations, ranging from [10, +∞). Tokens encompass the total number of tokens in both input and output, which means that if the user input is lengthy, the available number of tokens for generating a response will be reduced accordingly.',
  kongZhiAIHui:'Control the maximum token length of AI responses, ranging from [10, +∞). Smaller values can somewhat reduce irrelevant output from the AI, but may also result in incomplete responses.',
  zuiDaXiangYingChang: 'Max Response Length',
  baoLiuDuoLunDui: 'Maximum number of preserved context groups in multi-turn conversations, ranging from [0, 30].',
  duiHuaLunCi: 'Dialogue Rounds',
  peiZhiAIHui:'"Configuring the divergence level of AI responses. A higher value will make the output more random, while a lower value will make the output more precise. The range is [0, 1].',
  moXingGaoJiPei: 'Advanced Model Configuration',
  suiJi: 'Random',
  jingQue: 'Accuracy',
  wenTiYinDao: 'Question Guiding',
  qingShuRuPR: 'Input Prompt',
  tiShiCiKeYi:'Prompt can assist the model in better understanding the user intent and provide necessary guidance in the early stages of a conversation. These prompts are fixed at the beginning of the dialogue, and appropriate prompts can steer the direction of the conversation. Variables such as {{.question}} can be used to support dynamic input within prompts.',
  pROMP: 'Prompt Introduction',
  pROMP2:'Prompt refers to the instructions or questions provided to an AI model to guide its response generation or perform specific tasks. The design and selection of prompts can significantly influence the output results and behavior of AI models',
  xuanZePRO: 'Select Prompt template',
  pROMP3: 'Prompt Template',
  xianZaiNiXuYao:'Now you need to create a PowerPoint presentation, and you need to prepare the content based on the theme I provide. In the end, you need to provide: \n [Table of Contents]: A table of contents for the PowerPoint presentation based on the given theme and content. \n [Content]: Content outlines corresponding to the titles in the table of contents. Next, the PowerPoint theme you need to work on is: {{.question}} \r\n {{.history}}',
  pPTKuangJia: 'PPT Framework',
  niXianZaiShiWo:'You are now my legal advisor. I will describe a legal issue, and you need to provide advice on how to handle it. Please reply with your recommendation only, without any explanations. My question is: "{{.question}}". \r\n {{.history}}',
  faLuGuWen: 'Legal Advisor',
  qingGenJuShangXia: 'Please answer the user question based on the provided context: {{.question}}\r\n{{.history}}',
  renShiZhuGuan: 'HR Manager',
  xianZaiNiShiYi:'"Now you are a senior IT development engineer proficient in Go, and you will debug the code I provide. Please identify specific bugs in the code and provide the modified code using code blocks. The code you need to debug is as follows: {{.question}} \r\n {{.history}}', 
  daiMaDEB: 'Code Debug',
  shengChengYiXiaNei: 'Generate a summary of the following: {{.context}} {{.question}} \r\n {{.history}}',
  wenDangZhaiYao: 'Document Summary',
  xianZaiNiShiYi2:'Now you are a question-answering chatbot, and you will read and deeply understand the context I provide to answer the questions I ask. The question I am giving is: {{.question}}. The text you need to read and understand is: {{.context}} \r\n {{.history}}',
  wenBenWenDa: 'Answer',
  beiTiHuanWeiYong: 'Replaced with the user query',
  beiTiHuanWeiDang: 'Replace with the history of session, the number of history records is determined by the model conversation round',
  beiTiHuanWeiXiang: 'Substituted with relevant contextual information (such as relevant information obtained from a knowledge base)',
  shiYongShuoMing: 'Instructions',
  zhanWeiFu: 'placeholder',
  zaiSheZhiPR: 'When setting Prompt,variables supported. NOW, KubeAGI supports three types of placeholders in Prompt',
  biMianWuDaoHe:'Avoiding Misleading and Biased Responses: The design of Prompts can help prevent the generation of misleading, biased, or inappropriate answers by AI models. By explicitly specifying how to handle specific topics or sensitive issues, Prompts can mitigate the risk of the model generating inappropriate content.',
  duiHuaYiZhiXing:'Conversation Consistency: In conversational systems, Prompts can be used to ensure coherence and consistency in conversations. By including conversation history, contextual information, or previous dialogue snippets in Prompts, the model can better understand the conversation context and generate responses that align with previous answers.',
  yuYanFengGeHe:'Language Style and Text Generation: Prompts can be used to guide AI models in generating specific language or text styles. By selecting appropriate vocabulary, syntactic structures, and contextual information, prompts can influence the model to produce responses with different tones and styles, such as formal, friendly, or professional.',
  kongZhiShuChuZhi:'Control Output Quality: reasonable Prompt design can guide the model generating more accurate, relevant, and complete answers. Prompt contain information such as few shots, expected structure, problem refinement, help model understand task requirements and generate higher quality answer.',
  yinDaoMoXingXing:'Guidie Model Behavior: Prompt can clearly tell model what to do. Prompt can define goals of task, expected output format, required steps, etc.. to ensure the behavior of the model meets expectations.',
  zaiAIZhiNeng: 'In AI agents, Prompt has the following functions:',
  pROMP4: 'Prompt Introduction',
  tiShiGongChengZhi: 'Prompt Engineering Guide',
  chaKanGengDuoP: 'For more Prompt information, refer to',
  xiangSiDu: 'Similarity',
  yinYongShuJu: 'Reference data (3)',
  tITLE: '{val1} failed',
  qingShuRu: 'Input',
  shiShiSouSuo: 'Realtime search',
  qingXuanZeSouSuo: 'Select search address',
  chaKanYinYong: 'View references',
  chaKanXiangYingXin: 'View response information',
  geXingHuaPeiZhi: 'Customization',
  baoCun: 'Save',
  baoCunZhiNengTi: 'Failed to save Agent configuration',
  baoCunZhiNengTi2: 'Save Agent configuration successfully',
  qingXianXiuGaiZhi: 'Modify Agent configuration first',
  zhiNengTiPeiZhi: 'Agent Configuration',
  ma: '?',
  queDingShanChu: 'Delete',
  tITLE2: '{val1} Agent',
  shanChuZhiNengTi: 'Failed to delete Agent',
  shanChuZhiNengTi2: 'Delete Agent successfully',
  qingShuRuMiaoShu: 'Input description',
  miaoShu: 'Description',
  qiTa: 'Others',
  shengHuoQuWei: 'Life Fun',
  jueSeBanYan: 'Role Play',
  yingYinShengCheng: 'Video Generation',
  aIHuiHua: 'AI Painting',
  neiRongChuangZuo: 'Content Creation',
  gongZuoXueXi: 'Work & Learning',
  tongYongDuiHua: 'General Dialogue',
  youXiDongMan: 'Game Anime',
  qingXuanZeZhiNeng: 'Select Agent category',
  zhiNengTiFenLei: 'Agent Category',
  qingShangChuanTouXiang: 'Upload avatar',
  zhiNengTiTouXiang: 'Agent Avatar',
  qingShuRuZhiNeng: 'Input Agent alias',
  zhiNengTiBieMing: 'Agent Alias',
  qingShuRuZhiNeng2: 'Input Agent name',
  zhiNengTiMingCheng: 'Agent Name',
  tITLE3: '{val1} Agent',
  bianJiZhiNengTi: 'Failed to update Agent',
  bianJiZhiNengTi2: 'Update Agent successfully',
  bianJi: 'Edit',
  xinJian: 'Create',
  tITLE4: '{val1} Agent',
  tITLE5: '{val1} Agent successfully',
  faBu: 'Publish',
  cheXiaoFaBu: 'Unpublish',
  yongHuJiangHuiZai:'User can search/use this application in the AgileGPT platform, and start conversation with this Agent directly.',
  duiHua: 'Conversation',
  faBuZhiNengTi: 'Publish AI Agent',
  zhiNengTiPingGu: 'Evaluate AI Agent',
  miaoShu2: 'Description:',
  chuangJianZhe: 'Creator:',
  chuangJianShiJian: 'Time:',
  mingCheng: 'Name:',
  qingXuanZeFaBu: 'Select platform to publish',
  qingXuanZeCheXiao: 'Select platform to unpublish',
  xuanZeFaBuPing: 'Select platform to publish',
  xuanZeCheXiaoPing: 'Select platform to unpublish',
};
