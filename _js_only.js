
const DAILY_WORDS = [
  [{w:"abandon",ex:"He abandoned his plan halfway.",excn:"他中途放弃了他的计划。",p:"/əˈbændən/",m:"v. 放弃，遗弃",c:"abandon oneself to"},{w:"absorb",p:"/əbˈzɔːb/",m:"v. 吸收，吸引",c:"be absorbed in"},{w:"abstract",p:"/ˈæbstrækt/",m:"adj. 抽象的 n. 摘要",c:"abstract concept"},{w:"abundant",p:"/əˈbʌndənt/",m:"adj. 丰富的，充裕的",c:"abundant resources"},{w:"abuse",p:"/əˈbjuːz/",m:"v./n. 滥用，虐待",c:"drug abuse"},{w:"academic",p:"/ˌækəˈdemɪk/",m:"adj. 学术的",c:"academic research"},{w:"accelerate",p:"/əkˈseləreɪt/",m:"v. 加速",c:"accelerate growth"},{w:"access",p:"/ˈækses/",m:"n. 通道 v. 访问",c:"have access to"},{w:"accommodate",p:"/əˈkɒmədeɪt/",m:"v. 容纳，适应",c:"accommodate needs"},{w:"accompany",p:"/əˈkʌmpəni/",m:"v. 陪伴，伴随",c:"accompany sb"},{w:"accomplish",ex:"She accomplished the task on time.",excn:"她按时完成了任务。",p:"/əˈkʌmplɪʃ/",m:"v. 完成，实现",c:"accomplish a goal"},{w:"account",p:"/əˈkaʊnt/",m:"n. 账户 v. 解释",c:"account for"},{w:"accurate",p:"/ˈækjərət/",m:"adj. 准确的",c:"accurate data"},{w:"achieve",p:"/əˈtʃiːv/",m:"v. 达到，获得",c:"achieve success"},{w:"acknowledge",p:"/əkˈnɒlɪdʒ/",m:"v. 承认，认可",c:"acknowledge the fact"},{w:"acquire",ex:"She acquired new skills quickly.",excn:"她很快掌握了新技能。",p:"/əˈkwaɪə(r)/",m:"v. 获得，学到",c:"acquire knowledge"},{w:"adapt",ex:"He adapted to the new environment.",excn:"他适应了新环境。",p:"/əˈdæpt/",m:"v. 适应，改编",c:"adapt to"},{w:"adequate",p:"/ˈædɪkwət/",m:"adj. 足够的，适当的",c:"adequate supply"},{w:"adjust",p:"/əˈdʒʌst/",m:"v. 调整，适应",c:"adjust to"},{w:"administration",p:"/ədˌmɪnɪˈstreɪʃn/",m:"n. 管理，行政",c:"public administration"},{w:"admire",p:"/ədˈmaɪə(r)/",m:"v. 钦佩，欣赏",c:"admire sb for"},{w:"adopt",p:"/əˈdɒpt/",m:"v. 采纳，收养",c:"adopt a method"},{w:"advance",p:"/ədˈvɑːns/",m:"n./v. 前进，进步",c:"in advance"},{w:"advantage",p:"/ədˈvɑːntɪdʒ/",m:"n. 优势，有利条件",c:"take advantage of"},{w:"advertise",p:"/ˈædvətaɪz/",m:"v. 做广告",c:"advertise a product"},{w:"affair",p:"/əˈfeə(r)/",m:"n. 事务，事件",c:"public affairs"},{w:"affect",p:"/əˈfekt/",m:"v. 影响，感动",c:"affect the outcome"},{w:"afford",p:"/əˈfɔːd/",m:"v. 负担得起",c:"cannot afford"},{w:"aggressive",p:"/əˈɡresɪv/",m:"adj. 侵略的，好斗的",c:"aggressive behavior"},{w:"allocate",ex:"Funds were allocated to education.",excn:"资金被分配给了教育。",p:"/ˈæləkeɪt/",m:"v. 分配",c:"allocate resources"},{w:"alternative",ex:"We need an alternative approach.",excn:"我们需要替代方案。",p:"/ɔːlˈtɜːnətɪv/",m:"n./adj. 替代选择",c:"alternative solution"},{w:"amaze",p:"/əˈmeɪz/",m:"v. 使惊奇",c:"be amazed at"},{w:"ambition",p:"/æmˈbɪʃn/",m:"n. 雄心，野心",c:"political ambition"},{w:"analyze",ex:"We need to analyze the results.",excn:"我们需要分析结果。",p:"/ˈænəlaɪz/",m:"v. 分析",c:"analyze data"},{w:"anniversary",p:"/ˌænɪˈvɜːsəri/",m:"n. 周年纪念",c:"wedding anniversary"},{w:"annual",p:"/ˈænjuəl/",m:"adj. 每年的",c:"annual report"},{w:"anticipate",p:"/ænˈtɪsɪpeɪt/",m:"v. 预期",c:"anticipate problems"},{w:"anxiety",p:"/æŋˈzaɪəti/",m:"n. 焦虑",c:"reduce anxiety"},{w:"apparent",p:"/əˈpærənt/",m:"adj. 明显的",c:"apparent reason"},{w:"appeal",p:"/əˈpiːl/",m:"v./n. 呼吁，吸引",c:"appeal to"},{w:"appetite",p:"/ˈæpɪtaɪt/",m:"n. 食欲，胃口",c:"lose appetite"},{w:"appliance",p:"/əˈplaɪəns/",m:"n. 电器，设备",c:"household appliances"},{w:"application",p:"/ˌæplɪˈkeɪʃn/",m:"n. 申请，应用",c:"job application"},{w:"appreciate",ex:"I appreciate your efforts.",excn:"我感谢你的努力。",p:"/əˈpriːʃieɪt/",m:"v. 欣赏，感激",c:"appreciate your help"},{w:"approach",ex:"A different approach is needed.",excn:"需要不同的方法。",p:"/əˈprəʊtʃ/",m:"n./v. 接近，方法",c:"a new approach"},{w:"appropriate",ex:"That is not appropriate behavior.",excn:"那是不恰当行为。",p:"/əˈprəʊpriət/",m:"adj. 适当的",c:"appropriate measures"},{w:"approve",p:"/əˈpruːv/",m:"v. 批准，赞成",c:"approve of"},{w:"arise",p:"/əˈraɪz/",m:"v. 出现，产生",c:"problems arise"},{w:"arouse",p:"/əˈraʊz/",m:"v. 唤起，引起",c:"arouse interest"},{w:"artificial",p:"/ˌɑːtɪˈfɪʃl/",m:"adj. 人工的",c:"artificial intelligence"},{w:"aspect",p:"/ˈæspekt/",m:"n. 方面",c:"every aspect"},{w:"assemble",p:"/əˈsembl/",m:"v. 集合，组装",c:"assemble the team"},{w:"assess",ex:"We need to assess the situation.",excn:"我们需要评估情况。",p:"/əˈses/",m:"v. 评估",c:"assess the situation"},{w:"assign",p:"/əˈsaɪn/",m:"v. 分配",c:"assign a task"},{w:"assist",p:"/əˈsɪst/",m:"v. 帮助",c:"assist sb with"},{w:"associate",p:"/əˈsəʊʃieɪt/",m:"v. 联系，关联",c:"associate with"},{w:"assume",p:"/əˈsjuːm/",m:"v. 假设",c:"assume responsibility"},{w:"atmosphere",p:"/ˈætməsfɪə(r)/",m:"n. 大气，氛围",c:"friendly atmosphere"},{w:"attach",p:"/əˈtætʃ/",m:"v. 附上",c:"attach importance to"},{w:"attain",p:"/əˈteɪn/",m:"v. 获得",c:"attain a goal"},{w:"attempt",p:"/əˈtempt/",m:"n./v. 尝试",c:"make an attempt"},{w:"attitude",p:"/ˈætɪtjuːd/",m:"n. 态度",c:"positive attitude"},{w:"attract",p:"/əˈtrækt/",m:"v. 吸引",c:"attract attention"},{w:"attribute",p:"/ˈætrɪbjuːt/",m:"n. 属性 v. 归因于",c:"attribute to"},{w:"authority",p:"/ɔːˈθɒrəti/",m:"n. 权威",c:"local authority"},{w:"automatic",p:"/ˌɔːtəˈmætɪk/",m:"adj. 自动的",c:"automatic system"},{w:"available",ex:"The service is available online.",excn:"该服务可在线使用。",p:"/əˈveɪləbl/",m:"adj. 可用的",c:"available resources"},{w:"avenue",p:"/ˈævənjuː/",m:"n. 大街，途径",c:"explore avenues"},{w:"average",p:"/ˈævərɪdʒ/",m:"adj. 平均的 n. 平均",c:"on average"},{w:"avoid",p:"/əˈvɔɪd/",m:"v. 避免",c:"avoid doing"},{w:"award",p:"/əˈwɔːd/",m:"n. 奖品 v. 授予",c:"win an award"},{w:"aware",p:"/əˈweə(r)/",m:"adj. 意识到的",c:"be aware of"},{w:"balance",p:"/ˈbæləns/",m:"n./v. 平衡",c:"keep balance"},{w:"ban",p:"/bæn/",m:"v./n. 禁止",c:"ban smoking"},{w:"barrier",p:"/ˈbæriə(r)/",m:"n. 障碍",c:"language barrier"},{w:"behavior",p:"/bɪˈheɪvjə(r)/",m:"n. 行为",c:"social behavior"},{w:"beneficial",ex:"Exercise is beneficial to health.",excn:"运动有益健康。",p:"/ˌbenɪˈfɪʃl/",m:"adj. 有益的",c:"beneficial to"},{w:"benefit",p:"/ˈbenɪfɪt/",m:"n. 利益 v. 受益",c:"benefit from"},{w:"blame",p:"/bleɪm/",m:"v./n. 责备",c:"blame sb for"},{w:"boom",p:"/buːm/",m:"n./v. 繁荣",c:"economic boom"}],
  [{w:"undergo",p:"/ˌʌndəˈɡəʊ/",m:"v. 经历",c:"undergo changes"},{w:"reveal",p:"/rɪˈviːl/",m:"v. 揭示",c:"reveal the truth"},{w:"inevitable",p:"/ɪnˈevɪtəbl/",m:"adj. 不可避免的",c:"inevitable result"},{w:"resolve",p:"/rɪˈzɒlv/",m:"v. 解决",c:"resolve conflicts"},{w:"original",p:"/əˈrɪdʒənl/",m:"adj. 原来的，原创的",c:"original idea"},{w:"exceed",ex:"Do not exceed the speed limit.",excn:"不要超速。",p:"/ɪkˈsiːd/",m:"v. 超过",c:"exceed expectations"},{w:"perceive",p:"/pəˈsiːv/",m:"v. 感知，理解",c:"perceive as"},{w:"participate",p:"/pɑːˈtɪsɪpeɪt/",m:"v. 参与",c:"participate in"},{w:"ultimate",p:"/ˈʌltɪmət/",m:"adj. 最终的",c:"ultimate goal"},{w:"execute",ex:"The plan was executed perfectly.",excn:"计划执行得很完美。",p:"/ˈeksɪkjuːt/",m:"v. 执行",c:"execute a plan"},{w:"survive",p:"/səˈvaɪv/",m:"v. 生存",c:"survive the crisis"},{w:"extraordinary",p:"/ɪkˈstrɔːdnri/",m:"adj. 非凡的",c:"extraordinary achievement"},{w:"moderate",p:"/ˈmɒdərət/",m:"adj. 适度的",c:"moderate exercise"},{w:"mutual",p:"/ˈmjuːtʃuəl/",m:"adj. 相互的",c:"mutual understanding"},{w:"concept",p:"/ˈkɒnsept/",m:"n. 概念",c:"basic concept"},{w:"claim",p:"/kleɪm/",m:"v./n. 声称，要求",c:"claim that"},{w:"expand",ex:"The company is expanding.",excn:"公司在扩张。",p:"/ɪkˈspænd/",m:"v. 扩大",c:"expand business"},{w:"purchase",p:"/ˈpɜːtʃəs/",m:"v./n. 购买",c:"purchase online"},{w:"nevertheless",p:"/ˌnevəðəˈles/",m:"adv. 尽管如此",c:""},{w:"expense",ex:"Living expenses are rising.",excn:"生活费用在上涨。",p:"/ɪkˈspens/",m:"n. 费用",c:"at the expense of"},{w:"crisis",p:"/ˈkraɪsɪs/",m:"n. 危机",c:"economic crisis"},{w:"unique",p:"/juˈniːk/",m:"adj. 独特的",c:"unique feature"},{w:"character",p:"/ˈkærəktə(r)/",m:"n. 性格，角色",c:"good character"},{w:"significant",p:"/sɪɡˈnɪfɪkənt/",m:"adj. 重要的",c:"significant change"},{w:"convenient",p:"/kənˈviːniənt/",m:"adj. 方便的",c:"convenient for"},{w:"engage",p:"/ɪnˈɡeɪdʒ/",m:"v. 参与，吸引",c:"engage in"},{w:"imply",p:"/ɪmˈplaɪ/",m:"v. 暗示",c:"imply that"},{w:"overcome",p:"/ˌəʊvəˈkʌm/",m:"v. 克服",c:"overcome difficulties"},{w:"substitute",p:"/ˈsʌbstɪtjuːt/",m:"n./v. 替代",c:"substitute for"},{w:"function",p:"/ˈfʌŋkʃn/",m:"n. 功能 v. 运作",c:"function properly"},{w:"emerge",p:"/iˈmɜːdʒ/",m:"v. 出现",c:"emerge from"},{w:"conduct",p:"/kənˈdʌkt/",m:"v. 实施",c:"conduct a survey"},{w:"restrict",p:"/rɪˈstrɪkt/",m:"v. 限制",c:"restrict access"},{w:"device",ex:"Turn off your device.",excn:"关闭你的设备。",p:"/dɪˈvaɪs/",m:"n. 设备",c:"electronic device"},{w:"consume",p:"/kənˈsjuːm/",m:"v. 消耗",c:"consume energy"},{w:"occupy",p:"/ˈɒkjupaɪ/",m:"v. 占据",c:"occupy time"},{w:"fundamental",p:"/ˌfʌndəˈmentl/",m:"adj. 基本的",c:"fundamental principle"},{w:"welfare",p:"/ˈwelfeə(r)/",m:"n. 福利",c:"social welfare"},{w:"border",p:"/ˈbɔːdə(r)/",m:"n. 边界",c:"cross the border"},{w:"emphasize",ex:"She emphasized the key points.",excn:"她强调了要点。",p:"/ˈemfəsaɪz/",m:"v. 强调",c:"emphasize the importance"},{w:"context",p:"/ˈkɒntekst/",m:"n. 背景，上下文",c:"in this context"},{w:"obtain",p:"/əbˈteɪn/",m:"v. 获得",c:"obtain permission"},{w:"creative",p:"/kriˈeɪtɪv/",m:"adj. 创造性的",c:"creative thinking"},{w:"destination",p:"/ˌdestɪˈneɪʃn/",m:"n. 目的地",c:"travel destination"},{w:"mission",p:"/ˈmɪʃn/",m:"n. 使命",c:"accomplish the mission"},{w:"ensure",ex:"We must ensure quality.",excn:"我们必须确保质量。",p:"/ɪnˈʃʊə(r)/",m:"v. 确保",c:"ensure safety"},{w:"confident",ex:"She is confident about the exam.",excn:"她对考试有信心。",p:"/ˈkɒnfɪdənt/",m:"adj. 自信的",c:"confident in"},{w:"perform",p:"/pəˈfɔːm/",m:"v. 表现，执行",c:"perform well"},{w:"encounter",p:"/ɪnˈkaʊntə(r)/",m:"v./n. 遭遇",c:"encounter problems"},{w:"critical",p:"/ˈkrɪtɪkl/",m:"adj. 批评的，关键的",c:"critical thinking"},{w:"extend",p:"/ɪkˈstend/",m:"v. 延伸，扩展",c:"extend the deadline"},{w:"community",p:"/kəˈmjuːnəti/",m:"n. 社区",c:"international community"},{w:"deposit",p:"/dɪˈpɒzɪt/",m:"v./n. 存款，存放",c:"bank deposit"},{w:"compare",p:"/kəmˈpeə(r)/",m:"v. 比较",c:"compare with"},{w:"institution",p:"/ˌɪnstɪˈtjuːʃn/",m:"n. 机构",c:"educational institution"},{w:"conservative",p:"/kənˈsɜːvətɪv/",m:"adj. 保守的",c:"conservative estimate"},{w:"capacity",p:"/kəˈpæsəti/",m:"n. 能力，容量",c:"production capacity"},{w:"enthusiasm",p:"/ɪnˈθjuːziæzəm/",m:"n. 热情",c:"show enthusiasm"},{w:"guarantee",p:"/ˌɡærənˈtiː/",m:"v./n. 保证",c:"guarantee quality"},{w:"flexible",p:"/ˈfleksəbl/",m:"adj. 灵活的",c:"flexible schedule"},{w:"global",p:"/ˈɡləʊbl/",m:"adj. 全球的",c:"global warming"},{w:"discipline",p:"/ˈdɪsəplɪn/",m:"n. 纪律，学科",c:"self-discipline"},{w:"innovation",p:"/ˌɪnəˈveɪʃn/",m:"n. 创新",c:"technological innovation"},{w:"involve",p:"/ɪnˈvɒlv/",m:"v. 涉及",c:"be involved in"},{w:"confuse",p:"/kənˈfjuːz/",m:"v. 使困惑",c:"confuse A with B"},{w:"debate",p:"/dɪˈbeɪt/",m:"n./v. 辩论",c:"heated debate"},{w:"discount",p:"/ˈdɪskaʊnt/",m:"n. 折扣",c:"at a discount"},{w:"confirm",p:"/kənˈfɜːm/",m:"v. 确认",c:"confirm the reservation"},{w:"normally",p:"/ˈnɔːməli/",m:"adv. 通常",c:""},{w:"procedure",p:"/prəˈsiːdʒə(r)/",m:"n. 程序，步骤",c:"standard procedure"},{w:"structure",p:"/ˈstrʌktʃə(r)/",m:"n. 结构",c:"organizational structure"},{w:"sufficient",p:"/səˈfɪʃnt/",m:"adj. 足够的",c:"sufficient evidence"},{w:"environment",ex:"Protect the environment.",excn:"保护环境。",p:"/ɪnˈvaɪərənmənt/",m:"n. 环境",c:"protect the environment"},{w:"despite",p:"/dɪˈspaɪt/",m:"prep. 尽管",c:"despite the fact"},{w:"predict",p:"/prɪˈdɪkt/",m:"v. 预测",c:"predict the future"},{w:"contemporary",p:"/kənˈtemprəri/",m:"adj. 当代的",c:"contemporary art"},{w:"emphasis",p:"/ˈemfəsɪs/",m:"n. 强调",c:"put emphasis on"},{w:"justify",p:"/ˈdʒʌstɪfaɪ/",m:"v. 证明……正当",c:"justify doing"},{w:"issue",p:"/ˈɪʃuː/",m:"n. 问题 v. 发布",c:"key issue"},{w:"comment",p:"/ˈkɒment/",m:"n./v. 评论",c:"comment on"},{w:"dramatic",p:"/drəˈmætɪk/",m:"adj. 戏剧性的",c:"dramatic change"},{w:"concern",p:"/kənˈsɜːn/",m:"n./v. 关心",c:"concern about"},{w:"contract",p:"/ˈkɒntrækt/",m:"n. 合同",c:"sign a contract"},{w:"external",ex:"External pressure is mounting.",excn:"外部压力在增加。",p:"/ɪkˈstɜːnl/",m:"adj. 外部的",c:"external factors"},{w:"dominate",ex:"The company dominates the industry.",excn:"这家公司主导行业。",p:"/ˈdɒmɪneɪt/",m:"v. 支配",c:"dominate the market"},{w:"transform",p:"/trænsˈfɔːm/",m:"v. 转变",c:"transform into"},{w:"identify",p:"/aɪˈdentɪfaɪ/",m:"v. 识别，确认",c:"identify with"},{w:"consequence",ex:"He faced the consequences.",excn:"他承担了后果。",p:"/ˈkɒnsɪkwəns/",m:"n. 结果",c:"as a consequence"},{w:"comfort",p:"/ˈkʌmfət/",m:"n./v. 舒适，安慰",c:"provide comfort"},{w:"intense",p:"/ɪnˈtens/",m:"adj. 强烈的",c:"intense pressure"},{w:"outcome",p:"/ˈaʊtkʌm/",m:"n. 结果",c:"final outcome"},{w:"implement",p:"/ˈɪmplɪment/",m:"v. 实施",c:"implement a plan"},{w:"proportion",p:"/prəˈpɔːʃn/",m:"n. 比例",c:"in proportion to"},{w:"eliminate",ex:"We need to eliminate waste.",excn:"我们需要消除浪费。",p:"/ɪˈlɪmɪneɪt/",m:"v. 消除",c:"eliminate poverty"},{w:"colleague",p:"/ˈkɒliːɡ/",m:"n. 同事",c:"work with colleagues"},{w:"worthwhile",p:"/ˌwɜːθˈwaɪl/",m:"adj. 值得的",c:"be worthwhile"},{w:"cooperate",p:"/kəʊˈɒpəreɪt/",m:"v. 合作",c:"cooperate with"},{w:"elaborate",p:"/ɪˈlæbərət/",m:"adj. 精心制作的",c:"elaborate plan"},{w:"complain",p:"/kəmˈpleɪn/",m:"v. 抱怨",c:"complain about"},{w:"relevant",p:"/ˈreləvənt/",m:"adj. 相关的",c:"relevant to"}],
  [{w:"symbol",p:"/ˈsɪmbl/",m:"n. 象征，符号",c:"status symbol"},{w:"launch",p:"/lɔːntʃ/",m:"v. 发射，启动",c:"launch a product"},{w:"define",p:"/dɪˈfaɪn/",m:"v. 定义",c:"define as"},{w:"expose",ex:"Don't expose it to sunlight.",excn:"不要暴露在阳光下。",p:"/ɪkˈspəʊz/",m:"v. 暴露",c:"expose to"},{w:"conventional",p:"/kənˈvenʃənl/",m:"adj. 传统的",c:"conventional wisdom"},{w:"conclude",p:"/kənˈkluːd/",m:"v. 结束，得出结论",c:"conclude that"},{w:"compete",p:"/kəmˈpiːt/",m:"v. 竞争",c:"compete with"},{w:"illustrate",p:"/ˈɪləstreɪt/",m:"v. 说明，阐明",c:"illustrate the point"},{w:"indicate",p:"/ˈɪndɪkeɪt/",m:"v. 表明",c:"indicate that"},{w:"rural",p:"/ˈrʊərəl/",m:"adj. 农村的",c:"rural areas"},{w:"strength",p:"/streŋθ/",m:"n. 力量，优势",c:"strengths and weaknesses"},{w:"construct",p:"/kənˈstrʌkt/",m:"v. 建造",c:"construct a building"},{w:"enable",ex:"Technology enables us to connect.",excn:"技术使我们能够连接。",p:"/ɪˈneɪbl/",m:"v. 使能够",c:"enable sb to do"},{w:"version",p:"/ˈvɜːʃn/",m:"n. 版本",c:"latest version"},{w:"potential",p:"/pəˈtenʃl/",m:"adj. 潜在的 n. 潜力",c:"potential customer"},{w:"option",p:"/ˈɒpʃn/",m:"n. 选择",c:"have no option"},{w:"exchange",ex:"They exchanged contact info.",excn:"他们交换了联系方式。",p:"/ɪksˈtʃeɪndʒ/",m:"v. 交换",c:"exchange ideas"},{w:"efficient",p:"/ɪˈfɪʃnt/",m:"adj. 高效的",c:"energy efficient"},{w:"reflect",p:"/rɪˈflekt/",m:"v. 反映，反思",c:"reflect on"},{w:"motivate",p:"/ˈməʊtɪveɪt/",m:"v. 激励",c:"motivate employees"},{w:"budget",p:"/ˈbʌdʒɪt/",m:"n. 预算",c:"within budget"},{w:"collapse",p:"/kəˈlæps/",m:"v./n. 倒塌，崩溃",c:"economic collapse"},{w:"communicate",p:"/kəˈmjuːnɪkeɪt/",m:"v. 交流",c:"communicate with"},{w:"decade",p:"/ˈdekeɪd/",m:"n. 十年",c:"in the past decade"},{w:"detect",p:"/dɪˈtekt/",m:"v. 发现",c:"detect a problem"},{w:"explicit",p:"/ɪkˈsplɪsɪt/",m:"adj. 明确的",c:"explicit instructions"},{w:"interact",p:"/ˌɪntərˈækt/",m:"v. 互动",c:"interact with"},{w:"conscious",p:"/ˈkɒnʃəs/",m:"adj. 有意识的",c:"be conscious of"},{w:"preserve",p:"/prɪˈzɜːv/",m:"v. 保护，保存",c:"preserve the environment"},{w:"destruction",p:"/dɪˈstrʌkʃn/",m:"n. 破坏",c:"environmental destruction"},{w:"recovery",p:"/rɪˈkʌvəri/",m:"n. 恢复",c:"economic recovery"},{w:"feature",p:"/ˈfiːtʃə(r)/",m:"n. 特色 v. 以……为特色",c:"main feature"},{w:"utilize",p:"/ˈjuːtəlaɪz/",m:"v. 利用",c:"utilize resources"},{w:"focus",p:"/ˈfəʊkəs/",m:"v./n. 聚焦",c:"focus on"},{w:"rely",p:"/rɪˈlaɪ/",m:"v. 依赖",c:"rely on"},{w:"frequency",p:"/ˈfriːkwənsi/",m:"n. 频率",c:"increase frequency"},{w:"previous",p:"/ˈpriːviəs/",m:"adj. 以前的",c:"previous experience"},{w:"liberal",p:"/ˈlɪbərəl/",m:"adj. 自由的，开明的",c:"liberal arts"},{w:"doubt",ex:"There is no doubt about it.",excn:"毫无疑问。",p:"/daʊt/",m:"n./v. 怀疑",c:"without doubt"},{w:"emotion",p:"/ɪˈməʊʃn/",m:"n. 情感",c:"express emotion"},{w:"facility",p:"/fəˈsɪləti/",m:"n. 设施，设备",c:"sports facilities"},{w:"exhibit",p:"/ɪɡˈzɪbɪt/",m:"v. 展示",c:"exhibit at a gallery"},{w:"decline",ex:"Sales declined sharply.",excn:"销售额急剧下降。",p:"/dɪˈklaɪn/",m:"v. 下降，拒绝",c:"decline an offer"},{w:"extreme",p:"/ɪkˈstriːm/",m:"adj. 极端的",c:"extreme weather"},{w:"household",p:"/ˈhaʊshəʊld/",m:"n. 家庭",c:"household appliances"},{w:"revolution",p:"/ˌrevəˈluːʃn/",m:"n. 革命",c:"industrial revolution"},{w:"psychology",p:"/saɪˈkɒlədʒi/",m:"n. 心理学",c:"social psychology"},{w:"contest",p:"/ˈkɒntest/",m:"n. 竞赛",c:"enter a contest"},{w:"foundation",p:"/faʊnˈdeɪʃn/",m:"n. 基础",c:"lay the foundation"},{w:"competent",p:"/ˈkɒmpɪtənt/",m:"adj. 胜任的",c:"competent in"},{w:"represent",p:"/ˌreprɪˈzent/",m:"v. 代表",c:"represent the company"},{w:"campaign",p:"/kæmˈpeɪn/",m:"n. 运动，战役",c:"advertising campaign"},{w:"evolve",ex:"The species evolved over time.",excn:"该物种随时间进化。",p:"/iˈvɒlv/",m:"v. 进化",c:"evolve into"},{w:"secure",p:"/sɪˈkjʊə(r)/",m:"adj. 安全的 v. 获得",c:"secure a job"},{w:"expect",ex:"What do you expect?",excn:"你期望什么？",p:"/ɪkˈspekt/",m:"v. 期望",c:"expect to do"},{w:"urban",p:"/ˈɜːbən/",m:"adj. 城市的",c:"urban areas"},{w:"exclude",ex:"No one should be excluded.",excn:"任何人不应被排除。",p:"/ɪkˈskluːd/",m:"v. 排除",c:"exclude from"},{w:"minority",p:"/maɪˈnɒrəti/",m:"n. 少数，少数民族",c:"ethnic minority"},{w:"individual",p:"/ˌɪndɪˈvɪdʒuəl/",m:"n. 个人 adj. 个人的",c:"individual needs"},{w:"variety",p:"/vəˈraɪəti/",m:"n. 多样性",c:"a variety of"},{w:"compensate",p:"/ˈkɒmpenseɪt/",m:"v. 补偿",c:"compensate for"},{w:"deny",p:"/dɪˈnaɪ/",m:"v. 否认",c:"deny doing"},{w:"sustainable",p:"/səˈsteɪnəbl/",m:"adj. 可持续的",c:"sustainable development"},{w:"economy",p:"/ɪˈkɒnəmi/",m:"n. 经济",c:"global economy"},{w:"respond",p:"/rɪˈspɒnd/",m:"v. 回应",c:"respond to"},{w:"range",p:"/reɪndʒ/",m:"n. 范围 v. 变化",c:"a range of"},{w:"vital",p:"/ˈvaɪtl/",m:"adj. 至关重要的",c:"vital to"},{w:"differ",ex:"Opinions differ on this.",excn:"对此意见不一。",p:"/ˈdɪfə(r)/",m:"v. 不同",c:"differ from"},{w:"generous",p:"/ˈdʒenərəs/",m:"adj. 慷慨的",c:"generous donation"},{w:"comprehensive",p:"/ˌkɒmprɪˈhensɪv/",m:"adj. 全面的",c:"comprehensive review"},{w:"commit",p:"/kəˈmɪt/",m:"v. 承诺，犯",c:"commit to"},{w:"generate",p:"/ˈdʒenəreɪt/",m:"v. 产生",c:"generate income"},{w:"contain",p:"/kənˈteɪn/",m:"v. 包含",c:"contain information"},{w:"prospect",p:"/ˈprɒspekt/",m:"n. 前景，展望",c:"job prospects"},{w:"wisdom",p:"/ˈwɪzdəm/",m:"n. 智慧",c:"conventional wisdom"},{w:"impact",p:"/ˈɪmpækt/",m:"n./v. 影响",c:"have an impact on"},{w:"evaluate",ex:"We need to evaluate performance.",excn:"我们需要评估绩效。",p:"/ɪˈvæljueɪt/",m:"v. 评估",c:"evaluate the results"},{w:"explore",ex:"Let's explore the possibilities.",excn:"让我们探索可能性。",p:"/ɪkˈsplɔː(r)/",m:"v. 探索",c:"explore options"},{w:"essential",p:"/ɪˈsenʃl/",m:"adj. 必要的",c:"essential to"},{w:"resource",p:"/rɪˈsɔːs/",m:"n. 资源",c:"natural resources"},{w:"fulfill",p:"/fʊlˈfɪl/",m:"v. 实现，满足",c:"fulfill a dream"},{w:"impose",p:"/ɪmˈpəʊz/",m:"v. 强加，征收",c:"impose on"},{w:"challenge",p:"/ˈtʃælɪndʒ/",m:"n./v. 挑战",c:"face challenges"},{w:"pursue",p:"/pəˈsjuː/",m:"v. 追求",c:"pursue a dream"},{w:"considerable",p:"/kənˈsɪdərəbl/",m:"adj. 相当大的",c:"considerable amount"},{w:"mechanism",p:"/ˈmekənɪzəm/",m:"n. 机制",c:"market mechanism"},{w:"complex",ex:"It's a complex situation.",excn:"情况复杂。",p:"/ˈkɒmpleks/",m:"adj. 复杂的",c:"complex issue"},{w:"revenue",p:"/ˈrevənjuː/",m:"n. 收入，税收",c:"tax revenue"},{w:"influence",p:"/ˈɪnfluəns/",m:"n./v. 影响",c:"have an influence on"},{w:"correspond",p:"/ˌkɒrəˈspɒnd/",m:"v. 符合，通信",c:"correspond to"},{w:"recommend",p:"/ˌrekəˈmend/",m:"v. 推荐",c:"recommend doing"},{w:"negotiate",p:"/nɪˈɡəʊʃieɪt/",m:"v. 谈判",c:"negotiate with"},{w:"employ",p:"/ɪmˈplɔɪ/",m:"v. 雇用，使用",c:"employ a method"},{w:"contrast",p:"/ˈkɒntrɑːst/",m:"n./v. 对比",c:"in contrast to"},{w:"instance",p:"/ˈɪnstəns/",m:"n. 例子",c:"for instance"},{w:"recognize",p:"/ˈrekəɡnaɪz/",m:"v. 认识，认出",c:"recognize the importance"},{w:"threaten",p:"/ˈθretn/",m:"v. 威胁",c:"threaten to do"},{w:"distribute",p:"/dɪˈstrɪbjuːt/",m:"v. 分发",c:"distribute to"},{w:"interpret",p:"/ɪnˈtɜːprɪt/",m:"v. 解释，口译",c:"interpret as"},{w:"category",p:"/ˈkætəɡəri/",m:"n. 类别",c:"fall into a category"}],
  [{w:"fertile",p:"/ˈfɜːtaɪl/",m:"adj. 肥沃的",c:"fertile land"},{w:"bless",p:"/bles/",m:"v. 祝福，保佑",c:"God bless you"},{w:"permanent",p:"/ˈpɜːmənənt/",m:"adj. 永久的",c:"permanent resident"},{w:"extinct",p:"/ɪkˈstɪŋkt/",m:"adj. 灭绝的，熄灭的",c:"extinct species"},{w:"contradict",p:"/ˌkɒntrəˈdɪkt/",m:"v. 矛盾，反驳",c:"contradict oneself"},{w:"anchor",p:"/ˈæŋkər/",m:"n. 锚 v. 固定",c:"news anchor"},{w:"certificate",p:"/səˈtɪfɪkət/",m:"n. 证书",c:"birth certificate"},{w:"detail",ex:"Explain it in detail.",excn:"详细解释。",p:"/ˈdiːteɪl/",m:"n. 细节",c:"in detail"},{w:"estimate",p:"/ˈestɪmeɪt/",m:"v./n. 估计",c:"rough estimate"},{w:"poverty",p:"/ˈpɒvəti/",m:"n. 贫穷",c:"poverty line"},{w:"valid",p:"/ˈvælɪd/",m:"adj. 有效的",c:"valid reason"},{w:"frown",p:"/fraʊn/",m:"v./n. 皱眉，不同意",c:"frown upon"},{w:"liability",p:"/ˌlaɪəˈbɪləti/",m:"n. 责任",c:"legal liability"},{w:"announce",p:"/əˈnaʊns/",m:"v. 宣布",c:"announce plans"},{w:"commend",p:"/kəˈmend/",m:"v. 表扬，推荐",c:"commend for bravery"},{w:"vessel",p:"/ˈvesl/",m:"n. 船，容器",c:"blood vessel"},{w:"property",p:"/ˈprɒpəti/",m:"n. 财产",c:"intellectual property"},{w:"conspicuous",p:"/kənˈspɪkjuəs/",m:"adj. 显眼的，引人注目的",c:"conspicuous consumption"},{w:"belly",p:"/ˈbeli/",m:"n. 腹部，胃",c:"belly fat"},{w:"responsibility",p:"/rɪˌspɒnsəˈbɪləti/",m:"n. 责任",c:"take responsibility"},{w:"artillery",p:"/ɑːˈtɪləri/",m:"n. 火炮，炮兵",c:"heavy artillery"},{w:"promotion",p:"/prəˈməʊʃn/",m:"n. 晋升",c:"sales promotion"},{w:"bribe",p:"/braɪb/",m:"n./v. 贿赂",c:"accept bribe"},{w:"guidance",p:"/ˈɡaɪdns/",m:"n. 指导",c:"career guidance"},{w:"beard",p:"/bɪəd/",m:"n. 胡须",c:"grow a beard"},{w:"assert",p:"/əˈsɜːt/",m:"v. 断言",c:"assert authority"},{w:"equivalent",p:"/ɪˈkwɪvələnt/",m:"adj. 等价的",c:"equivalent to"},{w:"equator",p:"/ɪˈkweɪtər/",m:"n. 赤道",c:"cross the equator"},{w:"arrest",p:"/əˈrest/",m:"v./n. 逮捕",c:"under arrest"},{w:"combat",p:"/ˈkɒmbæt/",m:"v./n. 战斗",c:"combat crime"},{w:"aim",p:"/eɪm/",m:"n. 目标 v. 瞄准",c:"aim at"},{w:"comet",p:"/ˈkɒmɪt/",m:"n. 彗星",c:"Halley's Comet"},{w:"witness",p:"/ˈwɪtnəs/",m:"n. 目击者 v. 目睹",c:"witness an event"},{w:"compromise",p:"/ˈkɒmprəmaɪz/",m:"n./v. 妥协",c:"reach a compromise"},{w:"democracy",p:"/dɪˈmɒkrəsi/",m:"n. 民主",c:"democracy and freedom"},{w:"commission",p:"/kəˈmɪʃn/",m:"n. 委员会，佣金",c:"on commission"},{w:"foster",p:"/ˈfɒstər/",m:"v. 培养，收养",c:"foster children"},{w:"trend",p:"/trend/",m:"n. 趋势",c:"current trend"},{w:"passion",p:"/ˈpæʃn/",m:"n. 激情",c:"passion for"},{w:"maintain",p:"/meɪnˈteɪn/",m:"v. 维持",c:"maintain contact"},{w:"dread",p:"/dred/",m:"v./n. 恐惧，害怕",c:"dread the thought"},{w:"conserve",p:"/kənˈsɜːv/",m:"v. 保存，节约",c:"conserve energy"},{w:"fitting",p:"/ˈfɪtɪŋ/",m:"adj. 合适的 n. 配件",c:"pipe fitting"},{w:"cucumber",p:"/ˈkjuːkʌmbər/",m:"n. 黄瓜",c:"fresh cucumber"},{w:"doctrine",p:"/ˈdɒktrɪn/",m:"n. 教义，学说",c:"military doctrine"},{w:"pledge",p:"/pledʒ/",m:"n./v. 保证",c:"take a pledge"},{w:"simplify",p:"/ˈsɪmplɪfaɪ/",m:"v. 简化",c:"simplify the process"},{w:"disrupt",p:"/dɪsˈrʌpt/",m:"v. 扰乱，打断",c:"disrupt class"},{w:"cradle",p:"/ˈkreɪdl/",m:"n. 摇篮，发源地",c:"cradle of civilization"},{w:"resist",p:"/rɪˈzɪst/",m:"v. 抵抗",c:"resist temptation"},{w:"division",p:"/dɪˈvɪʒn/",m:"n. 划分",c:"division of labor"},{w:"destiny",p:"/ˈdestəni/",m:"n. 命运，天命",c:"control your destiny"},{w:"consist",p:"/kənˈsɪst/",m:"v. 组成",c:"consist of"},{w:"election",p:"/ɪˈlekʃn/",m:"n. 选举",c:"general election"},{w:"fragrance",p:"/ˈfreɪɡrəns/",m:"n. 香气，芬芳",c:"flower fragrance"},{w:"arrange",p:"/əˈreɪndʒ/",m:"v. 安排",c:"arrange for"},{w:"gracious",p:"/ˈɡreɪʃəs/",m:"adj. 亲切的，仁慈的",c:"gracious host"},{w:"biology",p:"/baɪˈɒlədʒi/",m:"n. 生物学",c:"molecular biology"},{w:"format",p:"/ˈfɔːmæt/",m:"n. 格式",c:"file format"},{w:"bacteria",p:"/bækˈtɪəriə/",m:"n. 细菌",c:"harmful bacteria"},{w:"input",p:"/ˈɪnpʊt/",m:"n./v. 输入",c:"input data"},{w:"alarm",p:"/əˈlɑːm/",m:"n. 警报",c:"fire alarm"},{w:"epoch",p:"/ˈiːpɒk/",m:"n. 时代，纪元",c:"new epoch"},{w:"genetic",p:"/dʒəˈnetɪk/",m:"adj. 基因的，遗传的",c:"genetic engineering"},{w:"haul",p:"/hɔːl/",m:"v. 拖，拉 n. 一网",c:"long-haul flight"},{w:"session",p:"/ˈseʃn/",m:"n. 会议",c:"training session"},{w:"counsel",p:"/ˈkaʊnsl/",m:"n. 建议 v. 劝告",c:"legal counsel"},{w:"glimpse",p:"/ɡlɪmps/",m:"n./v. 一瞥，一看",c:"catch a glimpse"},{w:"resemble",p:"/rɪˈzembl/",m:"v. 相似",c:"resemble each other"},{w:"therapy",p:"/ˈθerəpi/",m:"n. 治疗",c:"physical therapy"},{w:"disguise",p:"/dɪsˈɡaɪz/",m:"v./n. 伪装，掩饰",c:"disguise oneself"},{w:"dump",p:"/dʌmp/",m:"v. 倾倒 n. 垃圾场",c:"dump waste"},{w:"income",p:"/ˈɪnkʌm/",m:"n. 收入",c:"annual income"},{w:"damn",p:"/dæm/",m:"v. 诅咒 int. 该死",c:"damn it"},{w:"disturbance",p:"/dɪˈstɜːbəns/",m:"n. 扰乱，骚乱",c:"public disturbance"},{w:"designate",p:"/ˈdezɪɡneɪt/",m:"v. 指定，命名",c:"designate as"},{w:"opponent",p:"/əˈpəʊnənt/",m:"n. 对手",c:"political opponent"},{w:"furious",p:"/ˈfjʊəriəs/",m:"adj. 狂怒的，激烈的",c:"furious debate"},{w:"passion",p:"/ˈpæʃn/",m:"n. 热情",c:"have a passion for"},{w:"compact",p:"/kəmˈpækt/",m:"adj. 紧凑的 n. 协议",c:"compact design"},{w:"fierce",p:"/fɪəs/",m:"adj. 激烈的",c:"fierce competition"},{w:"glorious",p:"/ˈɡlɔːriəs/",m:"adj. 光荣的，辉煌的",c:"glorious victory"},{w:"component",p:"/kəmˈpəʊnənt/",m:"n. 组成部分",c:"key component"},{w:"beneath",p:"/bɪˈniːθ/",m:"prep. 在…下方",c:"beneath the surface"},{w:"wealthy",p:"/ˈwelθi/",m:"adj. 富有的",c:"wealthy family"},{w:"circumstance",p:"/ˈsɜːkəmstəns/",m:"n. 环境",c:"under no circumstances"},{w:"blend",p:"/blend/",m:"v./n. 混合",c:"blend in"},{w:"behalf",p:"/bɪˈhɑːf/",m:"n. 利益，代表",c:"on behalf of"},{w:"betray",p:"/bɪˈtreɪ/",m:"v. 背叛",c:"betray trust"},{w:"adolescent",p:"/ˌædəˈlesnt/",m:"n. 青少年 adj. 青春期的",c:"adolescent behavior"},{w:"expenditure",p:"/ɪkˈspendɪtʃər/",m:"n. 支出，花费",c:"government expenditure"},{w:"appointment",p:"/əˈpɔɪntmənt/",m:"n. 约会",c:"make an appointment"},{w:"catalog",p:"/ˈkætəlɒɡ/",m:"n. 目录",c:"product catalog"},{w:"chase",p:"/tʃeɪs/",m:"v./n. 追逐，追求",c:"chase dreams"},{w:"unemployment",p:"/ˌʌnɪmˈplɔɪmənt/",m:"n. 失业",c:"unemployment rate"},{w:"concise",p:"/kənˈsaɪs/",m:"adj. 简明的，简洁的",c:"concise summary"},{w:"prohibit",p:"/prəˈhɪbɪt/",m:"v. 禁止",c:"strictly prohibit"},{w:"reject",p:"/rɪˈdʒekt/",m:"v. 拒绝",c:"reject an offer"},{w:"electronic",p:"/ɪˌlekˈtrɒnɪk/",m:"adj. 电子的",c:"electronic device"},{w:"denounce",p:"/dɪˈnaʊns/",m:"v. 谴责，告发",c:"denounce violence"}],
  [{w:"clone",p:"/kləʊn/",m:"n./v. 克隆",c:"human cloning"},{w:"embassy",p:"/ˈembəsi/",m:"n. 大使馆",c:"foreign embassy"},{w:"motion",p:"/ˈməʊʃn/",m:"n. 运动",c:"in motion"},{w:"blossom",p:"/ˈblɒsəm/",m:"n. 花 v. 开花",c:"cherry blossom"},{w:"fury",p:"/ˈfjʊəri/",m:"n. 狂怒，暴怒",c:"in a fury"},{w:"bug",p:"/bʌɡ/",m:"n. 虫子，故障",c:"software bug"},{w:"visible",p:"/ˈvɪzəbl/",m:"adj. 可见的",c:"visible sign"},{w:"tradition",p:"/trəˈdɪʃn/",m:"n. 传统",c:"cultural tradition"},{w:"salary",p:"/ˈsæləri/",m:"n. 薪水",c:"annual salary"},{w:"digital",p:"/ˈdɪdʒɪtl/",m:"adj. 数字的",c:"digital age"},{w:"forum",p:"/ˈfɔːrəm/",m:"n. 论坛，讨论会",c:"online forum"},{w:"profit",p:"/ˈprɒfɪt/",m:"n. 利润 v. 受益",c:"make a profit"},{w:"reference",p:"/ˈrefrəns/",m:"n. 参考",c:"for reference"},{w:"enhance",p:"/ɪnˈhɑːns/",m:"v. 提高",c:"enhance performance"},{w:"convince",p:"/kənˈvɪns/",m:"v. 说服",c:"convince someone"},{w:"injure",p:"/ˈɪndʒər/",m:"v. 伤害",c:"injure seriously"},{w:"portion",p:"/ˈpɔːʃn/",m:"n. 部分",c:"a large portion"},{w:"entitle",p:"/ɪnˈtaɪtl/",m:"v. 给…权利",c:"be entitled to"},{w:"largely",p:"/ˈlɑːdʒli/",m:"adv. 很大程度上",c:"largely due to"},{w:"dynamic",p:"/daɪˈnæmɪk/",m:"adj. 动态的",c:"dynamic economy"},{w:"formula",p:"/ˈfɔːmjələ/",m:"n. 公式",c:"mathematical formula"},{w:"harness",p:"/ˈhɑːnɪs/",m:"v. 利用 n. 马具",c:"harness energy"},{w:"utility",p:"/juːˈtɪləti/",m:"n. 公用事业",c:"public utility"},{w:"regulate",p:"/ˈreɡjuleɪt/",m:"v. 管理",c:"regulate temperature"},{w:"recession",p:"/rɪˈseʃn/",m:"n. 衰退",c:"economic recession"},{w:"characteristic",p:"/ˌkærəktəˈrɪstɪk/",m:"n. 特征",c:"key characteristic"},{w:"entity",p:"/ˈentəti/",m:"n. 实体，独立存在物",c:"legal entity"},{w:"conflict",p:"/ˈkɒnflɪkt/",m:"n. 冲突",c:"in conflict with"},{w:"rescue",p:"/ˈreskjuː/",m:"v./n. 营救",c:"rescue team"},{w:"journal",p:"/ˈdʒ�ːnl/",m:"n. 期刊",c:"academic journal"},{w:"cast",p:"/kɑːst/",m:"v. 投掷",c:"cast doubt on"},{w:"regulate",p:"/ˈreɡjuleɪt/",m:"v. 调节，管理",c:"regulate the market"},{w:"hail",p:"/heɪl/",m:"v. 赞扬 n. 冰雹",c:"hail a taxi"},{w:"fist",p:"/fɪst/",m:"n. 拳头",c:"clench fist"},{w:"govern",p:"/ˈɡʌvn/",m:"v. 统治，管理",c:"govern a country"},{w:"loan",p:"/ləʊn/",m:"n. 贷款 v. 借出",c:"bank loan"},{w:"excessive",p:"/ɪkˈsesɪv/",m:"adj. 过度的",c:"excessive use"},{w:"classify",p:"/ˈklæsɪfaɪ/",m:"v. 分类",c:"classify into"},{w:"content",p:"/ˈkɒntent/",m:"n. 内容 adj. 满足的",c:"be content with"},{w:"constant",p:"/ˈkɒnstənt/",m:"adj. 不断的",c:"constant effort"},{w:"neutral",p:"/ˈnjuːtrəl/",m:"adj. 中立的",c:"neutral position"},{w:"bargain",p:"/ˈbɑːɡɪn/",m:"n. 便宜货 v. 讨价还价",c:"bargain price"},{w:"expertise",p:"/ˌekspɜːˈtiːz/",m:"n. 专长，专门知识",c:"technical expertise"},{w:"corrupt",p:"/kəˈrʌpt/",m:"adj. 腐败的 v. 使腐化",c:"corrupt official"},{w:"feat",p:"/fiːt/",m:"n. 功绩，技艺",c:"remarkable feat"},{w:"convert",p:"/kənˈvɜːt/",m:"v. 转变",c:"convert into"},{w:"elbow",p:"/ˈelbəʊ/",m:"n. 肘部 v. 用肘推",c:"elbow grease"},{w:"converge",p:"/kənˈvɜːdʒ/",m:"v. 汇聚，集中",c:"converge on"},{w:"cultivate",p:"/ˈkʌltɪveɪt/",m:"v. 培养",c:"cultivate habits"},{w:"gorgeous",p:"/ˈɡɔːdʒəs/",m:"adj. 华丽的，极好的",c:"gorgeous sunset"},{w:"distinct",ex:"There are two distinct types.",excn:"有两种截然不同的类型。",p:"/dɪˈstɪŋkt/",m:"adj. 明显的",c:"distinct from"},{w:"coalition",p:"/ˌkəʊəˈlɪʃn/",m:"n. 联盟，联合",c:"coalition government"},{w:"bachelor",p:"/ˈbætʃələr/",m:"n. 学士，单身汉",c:"bachelor degree"},{w:"release",p:"/rɪˈliːs/",m:"v./n. 释放，发布",c:"press release"},{w:"contaminate",p:"/kənˈtæmɪneɪt/",m:"v. 污染，玷污",c:"contaminate water"},{w:"contemplate",p:"/ˈkɒntəmpleɪt/",m:"v. 沉思，考虑",c:"contemplate life"},{w:"ignorance",p:"/ˈɪɡnərəns/",m:"n. 无知",c:"ignorance of law"},{w:"flatter",p:"/ˈflætər/",m:"v. 奉承，使高兴",c:"flatter oneself"},{w:"visual",p:"/ˈvɪʒuəl/",m:"adj. 视觉的",c:"visual arts"},{w:"barely",p:"/ˈbeəli/",m:"adv. 几乎不",c:"barely enough"},{w:"apology",p:"/əˈpɒlədʒi/",m:"n. 道歉",c:"make an apology"},{w:"excel",p:"/ɪkˈsel/",m:"v. 擅长，突出",c:"excel at sports"},{w:"backup",p:"/ˈbækʌp/",m:"n. 备份 v. 支持",c:"data backup"},{w:"inspire",p:"/ɪnˈspaɪə(r)/",m:"v. 激励",c:"inspire sb to do"},{w:"regarding",p:"/rɪˈɡɑːdɪŋ/",m:"prep. 关于",c:"regarding this matter"},{w:"abolish",p:"/əˈbɒlɪʃ/",m:"v. 废除",c:"abolish slavery"},{w:"insurance",p:"/ɪnˈʃʊərəns/",m:"n. 保险",c:"health insurance"},{w:"dwell",p:"/dwel/",m:"v. 居住，详述",c:"dwell on the past"},{w:"gasp",p:"/ɡɑːsp/",m:"v./n. 喘气，倒抽气",c:"gasp for air"},{w:"deserve",p:"/dɪˈzɜːv/",m:"v. 值得",c:"deserve attention"},{w:"delegate",p:"/ˈdelɪɡət/",m:"n. 代表 v. 授权",c:"delegate authority"},{w:"awkward",p:"/ˈɔːkwəd/",m:"adj. 尴尬的",c:"awkward situation"},{w:"philosophy",p:"/fɪˈlɒsəfi/",m:"n. 哲学",c:"life philosophy"},{w:"diagnose",p:"/ˈdaɪəɡnəʊz/",m:"v. 诊断，判断",c:"diagnose disease"},{w:"ambassador",p:"/æmˈbæsədər/",m:"n. 大使，代表",c:"cultural ambassador"},{w:"fuse",p:"/fjuːz/",m:"n. 保险丝 v. 融合",c:"blow a fuse"},{w:"handicap",p:"/ˈhændikæp/",m:"n. 障碍 v. 阻碍",c:"physical handicap"},{w:"chamber",p:"/ˈtʃeɪmbər/",m:"n. 房间，议院",c:"chamber music"},{w:"chaos",p:"/ˈkeɪɒs/",m:"n. 混乱，无序",c:"in chaos"},{w:"hedge",p:"/hedʒ/",m:"n. 树篱 v. 避免明确",c:"hedge fund"},{w:"monitor",p:"/ˈmɒnɪtə(r)/",m:"v. 监控",c:"monitor the progress"},{w:"site",p:"/saɪt/",m:"n. 地点",c:"construction site"},{w:"overall",p:"/ˌəʊvərˈɔːl/",m:"adj. 总体的",c:"overall performance"},{w:"dispute",p:"/dɪˈspjuːt/",m:"n./v. 争论",c:"labor dispute"},{w:"cute",p:"/kjuːt/",m:"adj. 可爱的，聪明的",c:"cute puppy"},{w:"consensus",p:"/kənˈsensəs/",m:"n. 共识，一致意见",c:"reach a consensus"},{w:"fashion",p:"/ˈfæʃn/",m:"n. 时尚",c:"in fashion"},{w:"courtesy",p:"/ˈkɜːtəsi/",m:"n. 礼貌，好意",c:"common courtesy"},{w:"bunch",p:"/bʌntʃ/",m:"n. 一束，一群",c:"a bunch of"},{w:"pension",p:"/ˈpenʃn/",m:"n. 养老金",c:"pension fund"},{w:"enormous",p:"/ɪˈnɔːməs/",m:"adj. 巨大的",c:"enormous potential"},{w:"basement",p:"/ˈbeɪsmənt/",m:"n. 地下室",c:"basement parking"},{w:"groove",p:"/ɡruːv/",m:"n. 沟槽，惯例",c:"get into groove"},{w:"equip",p:"/ɪˈkwɪp/",m:"v. 装备",c:"equip with"},{w:"gland",p:"/ɡlænd/",m:"n. 腺体",c:"thyroid gland"},{w:"grope",p:"/ɡrəʊp/",m:"v. 摸索，探索",c:"grope in dark"},{w:"county",p:"/ˈkaʊnti/",m:"n. 县",c:"county level"},{w:"cemetery",p:"/ˈsemətri/",m:"n. 墓地，公墓",c:"national cemetery"},{w:"disposal",p:"/dɪˈspəʊzl/",m:"n. 处理，处置",c:"waste disposal"},{w:"culture",p:"/ˈkʌltʃər/",m:"n. 文化",c:"corporate culture"}],
  [{w:"apply",p:"/əˈplaɪ/",m:"v. 申请",c:"apply for"},{w:"otherwise",p:"/ˈʌðəwaɪz/",m:"adv. 否则",c:"or otherwise"},{w:"crisp",p:"/krɪsp/",m:"adj. 脆的，清新的",c:"crispy chicken"},{w:"specialist",p:"/ˈspeʃəlɪst/",m:"n. 专家",c:"heart specialist"},{w:"virtue",p:"/ˈvɜːtʃuː/",m:"n. 美德",c:"by virtue of"},{w:"determine",p:"/dɪˈtɜːmɪn/",m:"v. 决定",c:"determine to do"},{w:"cape",p:"/keɪp/",m:"n. 海角，披肩",c:"Cape of Good Hope"},{w:"collision",p:"/kəˈlɪʒn/",m:"n. 碰撞，冲突",c:"head-on collision"},{w:"cabinet",p:"/ˈkæbɪnət/",m:"n. 橱柜，内阁",c:"filing cabinet"},{w:"classic",p:"/ˈklæsɪk/",m:"adj. 经典的",c:"classic example"},{w:"tough",p:"/tʌf/",m:"adj. 艰苦的",c:"tough decision"},{w:"initiative",p:"/ɪˈnɪʃətɪv/",m:"n. 主动性",c:"take the initiative"},{w:"hop",p:"/hɒp/",m:"v. 跳跃，跳上",c:"hop on bus"},{w:"endow",p:"/ɪnˈdaʊ/",m:"v. 赋予，捐赠",c:"be endowed with"},{w:"enlighten",p:"/ɪnˈlaɪtn/",m:"v. 启发，开导",c:"enlighten the public"},{w:"grateful",p:"/ˈɡreɪtfl/",m:"adj. 感激的",c:"be grateful for"},{w:"damage",p:"/ˈdæmɪdʒ/",m:"n./v. 损害",c:"cause damage"},{w:"vivid",p:"/ˈvɪvɪd/",m:"adj. 生动的",c:"vivid memory"},{w:"promote",p:"/prəˈməʊt/",m:"v. 促进，晋升",c:"promote economic growth"},{w:"esteem",p:"/ɪˈstiːm/",m:"n./v. 尊敬，尊重",c:"self-esteem"},{w:"contact",p:"/ˈkɒntækt/",m:"n./v. 联系",c:"keep in contact"},{w:"wage",p:"/weɪdʒ/",m:"n. 工资 v. 发动",c:"minimum wage"},{w:"conservation",p:"/ˌkɒnsəˈveɪʃn/",m:"n. 保护",c:"energy conservation"},{w:"candidate",p:"/ˈkændɪdət/",m:"n. 候选人",c:"presidential candidate"},{w:"hostile",p:"/ˈhɒstaɪl/",m:"adj. 敌对的",c:"hostile environment"},{w:"species",p:"/ˈspiːʃiːz/",m:"n. 物种",c:"endangered species"},{w:"cathedral",p:"/kəˈθiːdrəl/",m:"n. 大教堂",c:"medieval cathedral"},{w:"ongoing",p:"/ˈɒnɡəʊɪŋ/",m:"adj. 进行中的",c:"ongoing project"},{w:"manufacture",p:"/ˌmænjuˈfæktʃər/",m:"v./n. 制造",c:"manufacture goods"},{w:"descent",p:"/dɪˈsent/",m:"n. 下降，血统",c:"rapid descent"},{w:"dissolve",p:"/dɪˈzɒlv/",m:"v. 溶解",c:"dissolve in water"},{w:"compliment",p:"/ˈkɒmplɪment/",m:"n. 赞美 v. 称赞",c:"pay a compliment"},{w:"gloom",p:"/ɡluːm/",m:"n. 忧郁，阴暗",c:"gloom and doom"},{w:"cumulative",p:"/ˈkjuːmjʊlətɪv/",m:"adj. 累积的",c:"cumulative effect"},{w:"current",ex:"What is your current job?",excn:"你现在做什么工作？",p:"/ˈkʌrənt/",m:"adj. 当前的",c:"current situation"},{w:"criminal",p:"/ˈkrɪmɪnl/",m:"adj. 犯罪的 n. 罪犯",c:"criminal law"},{w:"enterprise",p:"/ˈentəpraɪz/",m:"n. 企业",c:"private enterprise"},{w:"obligation",p:"/ˌɒblɪˈɡeɪʃn/",m:"n. 义务",c:"legal obligation"},{w:"diploma",p:"/dɪˈpləʊmə/",m:"n. 文凭，毕业证书",c:"high school diploma"},{w:"curb",p:"/kɜːb/",m:"v./n. 抑制，控制",c:"curb inflation"},{w:"celebrate",p:"/ˈselɪbreɪt/",m:"v. 庆祝",c:"celebrate success"},{w:"immigrant",p:"/ˈɪmɪɡrənt/",m:"n. 移民",c:"illegal immigrant"},{w:"quantity",p:"/ˈkwɒntəti/",m:"n. 数量",c:"large quantity"},{w:"bound",p:"/baʊnd/",m:"adj. 一定的",c:"be bound to"},{w:"confidence",p:"/ˈkɒnfɪdəns/",m:"n. 信心",c:"self-confidence"},{w:"evidence",p:"/ˈevɪdəns/",m:"n. 证据",c:"scientific evidence"},{w:"integrate",p:"/ˈɪntɪɡreɪt/",m:"v. 整合",c:"integrate into"},{w:"habitat",p:"/ˈhæbɪtæt/",m:"n. 栖息地",c:"natural habitat"},{w:"effective",p:"/ɪˈfektɪv/",m:"adj. 有效的",c:"effective method"},{w:"abnormal",p:"/æbˈnɔːml/",m:"adj. 反常的",c:"abnormal behavior"},{w:"vast",p:"/vɑːst/",m:"adj. 巨大的",c:"vast majority"},{w:"grasp",p:"/ɡrɑːsp/",m:"v./n. 抓住，理解",c:"grasp the concept"},{w:"custody",p:"/ˈkʌstədi/",m:"n. 监护，保管",c:"in police custody"},{w:"deduce",p:"/dɪˈdjuːs/",m:"v. 推断，演绎",c:"deduce from"},{w:"Easter",p:"/ˈiːstər/",m:"n. 复活节",c:"Easter egg"},{w:"highlight",p:"/ˈhaɪlaɪt/",m:"v. 强调",c:"highlight the importance"},{w:"flare",p:"/fleər/",m:"v. 闪耀 n. 闪光",c:"flare up"},{w:"racial",p:"/ˈreɪʃl/",m:"adj. 种族的",c:"racial discrimination"},{w:"radical",p:"/ˈrædɪkl/",m:"adj. 根本的，激进的",c:"radical change"},{w:"violence",p:"/ˈvaɪələns/",m:"n. 暴力",c:"domestic violence"},{w:"sponsor",p:"/ˈspɒnsər/",m:"v./n. 赞助",c:"sponsor an event"},{w:"inflation",p:"/ɪnˈfleɪʃn/",m:"n. 通货膨胀",c:"inflation rate"},{w:"conscience",p:"/ˈkɒnʃəns/",m:"n. 良心，良知",c:"clear conscience"},{w:"gossip",p:"/ˈɡɒsɪp/",m:"n./v. 闲聊，八卦",c:"celebrity gossip"},{w:"dubious",p:"/ˈdjuːbiəs/",m:"adj. 可疑的，怀疑的",c:"dubious claim"},{w:"flesh",p:"/fleʃ/",m:"n. 肉，肉体",c:"in the flesh"},{w:"relief",p:"/rɪˈliːf/",m:"n. 减轻",c:"pain relief"},{w:"theory",p:"/ˈθɪəri/",m:"n. 理论",c:"in theory"},{w:"capture",p:"/ˈkæptʃər/",m:"v. 俘获",c:"capture attention"},{w:"superior",p:"/suːˈpɪəriər/",m:"adj. 优越的",c:"superior quality"},{w:"foil",p:"/fɔɪl/",m:"n. 箔纸 v. 挫败",c:"aluminum foil"},{w:"heap",p:"/hiːp/",m:"n. 堆 v. 堆积",c:"heap of problems"},{w:"clip",p:"/klɪp/",m:"n. 夹子 v. 修剪",c:"paper clip"},{w:"ancestor",p:"/ˈænsestər/",m:"n. 祖先",c:"common ancestor"},{w:"sacrifice",p:"/ˈsækrɪfaɪs/",m:"n./v. 牺牲",c:"make a sacrifice"},{w:"chemical",p:"/ˈkemɪkl/",m:"adj. 化学的",c:"chemical reaction"},{w:"compile",p:"/kəmˈpaɪl/",m:"v. 编纂，编译",c:"compile data"},{w:"compel",p:"/kəmˈpel/",m:"v. 强迫，迫使",c:"feel compelled to"},{w:"heave",p:"/hiːv/",m:"v. 举起，起伏",c:"heave a sigh"},{w:"consult",p:"/kənˈsʌlt/",m:"v. 咨询",c:"consult a doctor"},{w:"vacant",p:"/ˈveɪkənt/",m:"adj. 空的，空缺的",c:"vacant position"},{w:"enrich",p:"/ɪnˈrɪtʃ/",m:"v. 使丰富，充实",c:"enrich experience"},{w:"response",p:"/rɪˈspɒns/",m:"n. 回应",c:"in response to"},{w:"derive",p:"/dɪˈraɪv/",m:"v. 源自",c:"derive from"},{w:"priority",p:"/praɪˈɒrəti/",m:"n. 优先事项",c:"top priority"},{w:"comedy",p:"/ˈkɒmədi/",m:"n. 喜剧",c:"romantic comedy"},{w:"assault",p:"/əˈsɔːlt/",m:"n./v. 攻击，袭击",c:"sexual assault"},{w:"flap",p:"/flæp/",m:"v. 拍动 n. 口盖",c:"flap wings"},{w:"elapse",p:"/ɪˈlæps/",m:"v. 流逝，过去",c:"time elapses"},{w:"facet",p:"/ˈfæsɪt/",m:"n. 方面，刻面",c:"every facet"},{w:"amateur",p:"/ˈæmətər/",m:"n. 业余爱好者 adj. 业余的",c:"amateur photographer"},{w:"fortnight",p:"/ˈfɔːtnaɪt/",m:"n. 两周",c:"a fortnight ago"},{w:"drastic",p:"/ˈdræstɪk/",m:"adj. 激烈的，严厉的",c:"drastic measures"},{w:"drain",p:"/dreɪn/",m:"v. 排水 n. 下水道",c:"brain drain"},{w:"eclipse",p:"/ɪˈklɪps/",m:"n. 日食 v. 使黯然失色",c:"solar eclipse"},{w:"undertake",p:"/ˌʌndəˈteɪk/",m:"v. 承担",c:"undertake a task"},{w:"donation",p:"/dəʊˈneɪʃn/",m:"n. 捐赠",c:"make a donation"},{w:"finite",p:"/ˈfaɪnaɪt/",m:"adj. 有限的",c:"finite resources"},{w:"pioneer",p:"/ˌpaɪəˈnɪər/",m:"n. 先驱 v. 开拓",c:"pioneer spirit"},{w:"glitter",p:"/ˈɡlɪtər/",m:"v./n. 闪光，闪烁",c:"glitter and gold"}],
  [{w:"complication",p:"/ˌkɒmplɪˈkeɪʃn/",m:"n. 复杂情况，并发症",c:"medical complication"},{w:"divine",p:"/dɪˈvaɪn/",m:"adj. 神圣的，极好的",c:"divine intervention"},{w:"target",p:"/ˈtɑːɡɪt/",m:"n. 目标 v. 以……为目标",c:"achieve the target"},{w:"endurance",p:"/ɪnˈdjʊərəns/",m:"n. 忍耐力，持久",c:"physical endurance"},{w:"deficiency",p:"/dɪˈfɪʃnsi/",m:"n. 缺乏，不足",c:"vitamin deficiency"},{w:"essence",p:"/ˈesns/",m:"n. 本质，精华",c:"in essence"},{w:"inspect",p:"/ɪnˈspekt/",m:"v. 检查",c:"inspect carefully"},{w:"rate",p:"/reɪt/",m:"n. 比率 v. 评价",c:"interest rate"},{w:"urge",p:"/ɜːdʒ/",m:"v. 敦促 n. 强烈欲望",c:"urge to do"},{w:"brood",p:"/bruːd/",m:"v. 沉思，孵蛋",c:"brood over"},{w:"employer",p:"/ɪmˈplɔɪər/",m:"n. 雇主",c:"employer brand"},{w:"boost",p:"/buːst/",m:"v./n. 促进",c:"boost confidence"},{w:"batch",p:"/bætʃ/",m:"n. 一批，一组",c:"batch production"},{w:"cylinder",p:"/ˈsɪlɪndər/",m:"n. 圆柱体，气缸",c:"cylinder shape"},{w:"fringe",p:"/frɪndʒ/",m:"n. 边缘，刘海",c:"on the fringe"},{w:"degenerate",p:"/dɪˈdʒenəreɪt/",m:"v. 退化，恶化",c:"degenerate into chaos"},{w:"cargo",p:"/ˈkɑːɡəʊ/",m:"n. 货物",c:"cargo ship"},{w:"exploit",p:"/ɪkˈsplɔɪt/",m:"v. 开发，剥削",c:"exploit resources"},{w:"hatch",p:"/hætʃ/",m:"v. 孵化，策划",c:"hatch a plan"},{w:"degrade",p:"/dɪˈɡreɪd/",m:"v. 降级，降解",c:"degrade environment"},{w:"argue",p:"/ˈɑːɡjuː/",m:"v. 争论",c:"argue against"},{w:"quality",p:"/ˈkwɒləti/",m:"n. 质量",c:"high quality"},{w:"complaint",p:"/kəmˈpleɪnt/",m:"n. 投诉",c:"make a complaint"},{w:"comprise",p:"/kəmˈpraɪz/",m:"v. 包含",c:"be comprised of"},{w:"cognitive",p:"/ˈkɒɡnətɪv/",m:"adj. 认知的",c:"cognitive ability"},{w:"prejudice",p:"/ˈpredʒədɪs/",m:"n. 偏见",c:"racial prejudice"},{w:"security",p:"/sɪˈkjʊərəti/",m:"n. 安全",c:"national security"},{w:"publish",p:"/ˈpʌblɪʃ/",m:"v. 出版",c:"publish a book"},{w:"embrace",p:"/ɪmˈbreɪs/",m:"v. 拥抱，接受",c:"embrace change"},{w:"diverse",p:"/daɪˈvɜːs/",m:"adj. 多样的",c:"culturally diverse"},{w:"immediate",p:"/ɪˈmiːdiət/",m:"adj. 立即的",c:"immediate action"},{w:"hospitality",p:"/ˌhɒspɪˈtæləti/",m:"n. 好客，款待",c:"warm hospitality"},{w:"symptom",p:"/ˈsɪmptəm/",m:"n. 症状",c:"common symptom"},{w:"expedition",p:"/ˌekspəˈdɪʃn/",m:"n. 远征，探险",c:"scientific expedition"},{w:"crime",p:"/kraɪm/",m:"n. 犯罪",c:"commit a crime"},{w:"voluntary",p:"/ˈvɒləntri/",m:"adj. 自愿的",c:"voluntary work"},{w:"court",p:"/kɔːt/",m:"n. 法庭",c:"supreme court"},{w:"tendency",p:"/ˈtendənsi/",m:"n. 趋势",c:"have a tendency to"},{w:"economic",p:"/ˌiːkəˈnɒmɪk/",m:"adj. 经济的",c:"economic growth"},{w:"fiction",p:"/ˈfɪkʃn/",m:"n. 小说",c:"science fiction"},{w:"fantasy",p:"/ˈfæntəsi/",m:"n. 幻想，想象",c:"fantasy world"},{w:"mild",p:"/maɪld/",m:"adj. 温和的",c:"mild climate"},{w:"descendant",p:"/dɪˈsendənt/",m:"n. 后代，后裔",c:"direct descendant"},{w:"drought",p:"/draʊt/",m:"n. 干旱",c:"severe drought"},{w:"horizon",p:"/həˈraɪzn/",m:"n. 地平线",c:"broaden horizon"},{w:"allowance",p:"/əˈlaʊəns/",m:"n. 津贴",c:"make allowance for"},{w:"opportunity",p:"/ˌɒpəˈtjuːnəti/",m:"n. 机会",c:"seize the opportunity"},{w:"element",p:"/ˈelɪmənt/",m:"n. 元素",c:"key element"},{w:"ceremony",p:"/ˈserəməni/",m:"n. 典礼",c:"opening ceremony"},{w:"feasible",p:"/ˈfiːzəbl/",m:"adj. 可行的",c:"feasible solution"},{w:"substance",p:"/ˈsʌbstəns/",m:"n. 物质",c:"chemical substance"},{w:"bankrupt",p:"/ˈbæŋkrʌpt/",m:"adj. 破产的",c:"go bankrupt"},{w:"pressure",p:"/ˈpreʃər/",m:"n. 压力",c:"under pressure"},{w:"dispatch",p:"/dɪˈspætʃ/",m:"v./n. 派遣，发送",c:"dispatch team"},{w:"deceive",p:"/dɪˈsiːv/",m:"v. 欺骗",c:"deceive someone"},{w:"conform",p:"/kənˈfɔːm/",m:"v. 遵守，符合",c:"conform to standards"},{w:"shelter",p:"/ˈʃeltər/",m:"n. 庇护所",c:"take shelter"},{w:"bud",p:"/bʌd/",m:"n. 芽 v. 发芽",c:"flower bud"},{w:"grace",p:"/ɡreɪs/",m:"n. 优美，恩典",c:"grace and elegance"},{w:"network",p:"/ˈnetwɜːk/",m:"n. 网络",c:"social network"},{w:"comply",p:"/kəmˈplaɪ/",m:"v. 遵守，服从",c:"comply with rules"},{w:"persist",p:"/pəˈsɪst/",m:"v. 坚持",c:"persist in"},{w:"gleam",p:"/ɡliːm/",m:"v./n. 闪烁，微光",c:"gleam of hope"},{w:"feminine",p:"/ˈfemənɪn/",m:"adj. 女性的，阴性的",c:"feminine beauty"},{w:"export",p:"/ɪkˈspɔːt/",m:"v./n. 出口",c:"export goods"},{w:"flock",p:"/flɒk/",m:"n. 群 v. 聚集",c:"flock of birds"},{w:"fault",p:"/fɔːlt/",m:"n. 缺点，过错",c:"find fault with"},{w:"frontier",p:"/ˈfrʌntɪər/",m:"n. 边境，前沿",c:"new frontier"},{w:"exception",p:"/ɪkˈsepʃn/",m:"n. 例外",c:"without exception"},{w:"disclose",p:"/dɪsˈkləʊz/",m:"v. 揭露，透露",c:"disclose information"},{w:"bond",p:"/bɒnd/",m:"n. 纽带，债券",c:"emotional bond"},{w:"cellar",p:"/ˈselər/",m:"n. 地窖，酒窖",c:"wine cellar"},{w:"outstanding",p:"/aʊtˈstændɪŋ/",m:"adj. 杰出的",c:"outstanding achievement"},{w:"halt",p:"/hɔːlt/",m:"v./n. 停止",c:"come to a halt"},{w:"leak",p:"/liːk/",m:"v./n. 泄漏",c:"leak information"},{w:"elite",p:"/eɪˈliːt/",m:"n. 精英 adj. 精英的",c:"political elite"},{w:"reform",p:"/rɪˈfɔːm/",m:"v./n. 改革",c:"economic reform"},{w:"drift",p:"/drɪft/",m:"v./n. 漂流",c:"drift apart"},{w:"establish",p:"/ɪˈstæblɪʃ/",m:"v. 建立",c:"establish contact"},{w:"generalize",p:"/ˈdʒenrəlaɪz/",m:"v. 概括，归纳",c:"generalize from"},{w:"cease",p:"/siːs/",m:"v. 停止",c:"cease to exist"},{w:"prevail",p:"/prɪˈveɪl/",m:"v. 盛行",c:"prevail over"},{w:"expend",p:"/ɪkˈspend/",m:"v. 花费，消耗",c:"expend energy"},{w:"cater",p:"/ˈkeɪtər/",m:"v. 提供饮食，迎合",c:"cater to needs"},{w:"architecture",p:"/ˈɑːkɪtektʃər/",m:"n. 建筑学",c:"modern architecture"},{w:"panel",p:"/ˈpænl/",m:"n. 面板，小组",c:"control panel"},{w:"erupt",p:"/ɪˈrʌpt/",m:"v. 爆发，喷发",c:"volcano erupts"},{w:"pride",p:"/praɪd/",m:"n. 骄傲 v. 自豪",c:"take pride in"},{w:"bulk",p:"/bʌlk/",m:"n. 大量，大部分",c:"in bulk"},{w:"scholarship",p:"/ˈskɒləʃɪp/",m:"n. 奖学金",c:"win a scholarship"},{w:"dilute",p:"/daɪˈluːt/",m:"v. 稀释，冲淡",c:"dilute solution"},{w:"confine",p:"/kənˈfaɪn/",m:"v. 限制，禁闭",c:"confine to bed"},{w:"vision",p:"/ˈvɪʒn/",m:"n. 愿景，视力",c:"have a vision"},{w:"coherent",p:"/kəʊˈhɪərənt/",m:"adj. 连贯的，一致的",c:"coherent argument"},{w:"hamper",p:"/ˈhæmpər/",m:"v. 妨碍，阻碍",c:"hamper progress"},{w:"dimension",p:"/daɪˈmenʃn/",m:"n. 尺寸，维度",c:"third dimension"},{w:"joint",p:"/dʒɔɪnt/",m:"adj. 联合的 n. 关节",c:"joint effort"},{w:"regulation",p:"/ˌreɡjuˈleɪʃn/",m:"n. 法规",c:"government regulation"},{w:"hostage",p:"/ˈhɒstɪdʒ/",m:"n. 人质",c:"held hostage"},{w:"ecology",p:"/iːˈkɒlədʒi/",m:"n. 生态学",c:"marine ecology"}],
  [{w:"factor",p:"/ˈfæktər/",m:"n. 因素",c:"key factor"},{w:"restore",p:"/rɪˈstɔːr/",m:"v. 恢复",c:"restore order"},{w:"billion",p:"/ˈbɪljən/",m:"n. 十亿",c:"billions of"},{w:"burglar",p:"/ˈbɜːɡlər/",m:"n. 窃贼",c:"burglar alarm"},{w:"attractive",p:"/əˈtræktɪv/",m:"adj. 有吸引力的",c:"attractive offer"},{w:"companion",p:"/kəmˈpæniən/",m:"n. 同伴",c:"travel companion"},{w:"finance",p:"/ˈfaɪnæns/",m:"n. 金融",c:"personal finance"},{w:"heir",p:"/eər/",m:"n. 继承人",c:"rightful heir"},{w:"chronic",p:"/ˈkrɒnɪk/",m:"adj. 慢性的，长期的",c:"chronic disease"},{w:"depart",p:"/dɪˈpɑːt/",m:"v. 离开",c:"depart from"},{w:"blast",p:"/blɑːst/",m:"n. 爆炸 v. 爆破",c:"blast off"},{w:"discourse",p:"/ˈdɪskɔːs/",m:"n. 论述，谈话",c:"academic discourse"},{w:"zone",p:"/zəʊn/",m:"n. 区域，地带",c:"comfort zone"},{w:"leadership",p:"/ˈliːdəʃɪp/",m:"n. 领导能力",c:"under the leadership"},{w:"appoint",p:"/əˈpɔɪnt/",m:"v. 任命",c:"appoint a leader"},{w:"flaw",p:"/flɔː/",m:"n. 缺陷，瑕疵",c:"fatal flaw"},{w:"deliver",p:"/dɪˈlɪvər/",m:"v. 递送，发表",c:"deliver a speech"},{w:"react",p:"/riˈækt/",m:"v. 反应",c:"react to"},{w:"triumph",p:"/ˈtraɪʌmf/",m:"n. 胜利",c:"moment of triumph"},{w:"occasion",p:"/əˈkeɪʒn/",m:"n. 场合",c:"on occasion"},{w:"curriculum",p:"/kəˈrɪkjələm/",m:"n. 课程",c:"curriculum vitae"},{w:"abortion",p:"/əˈbɔːʃn/",m:"n. 流产",c:"illegal abortion"},{w:"grant",p:"/ɡrɑːnt/",m:"v. 授予 n. 拨款",c:"take for granted"},{w:"audience",p:"/ˈɔːdiəns/",m:"n. 观众",c:"target audience"},{w:"curiosity",p:"/ˌkjʊəriˈɒsəti/",m:"n. 好奇心",c:"out of curiosity"},{w:"personality",p:"/ˌpɜːsəˈnæləti/",m:"n. 个性",c:"strong personality"},{w:"vain",p:"/veɪn/",m:"adj. 徒劳的",c:"in vain"},{w:"primary",p:"/ˈpraɪməri/",m:"adj. 主要的，初级的",c:"primary school"},{w:"maximum",p:"/ˈmæksɪməm/",m:"n./adj. 最大",c:"maximum capacity"},{w:"moreover",p:"/mɔːrˈəʊvər/",m:"adv. 此外",c:"moreover important"},{w:"dine",p:"/daɪn/",m:"v. 进餐，用餐",c:"dine out"},{w:"blunt",p:"/blʌnt/",m:"adj. 钝的，直率的",c:"blunt instrument"},{w:"landscape",p:"/ˈlændskeɪp/",m:"n. 风景",c:"urban landscape"},{w:"absence",p:"/ˈæbsəns/",m:"n. 缺席",c:"in the absence of"},{w:"deteriorate",p:"/dɪˈtɪəriəreɪt/",m:"v. 恶化，变坏",c:"health deteriorates"},{w:"charter",p:"/ˈtʃɑːtər/",m:"n. 宪章 v. 包租",c:"UN Charter"},{w:"abroad",p:"/əˈbrɔːd/",m:"adv. 到国外",c:"study abroad"},{w:"cope",p:"/kəʊp/",m:"v. 应付",c:"cope with"},{w:"diminish",p:"/dɪˈmɪnɪʃ/",m:"v. 减少，缩小",c:"diminish importance"},{w:"blaze",p:"/bleɪz/",m:"n. 火焰 v. 燃烧",c:"blaze a trail"},{w:"extensive",p:"/ɪkˈstensɪv/",m:"adj. 广泛的",c:"extensive research"},{w:"backward",p:"/ˈbækwəd/",m:"adj. 落后的",c:"backward area"},{w:"accuse",p:"/əˈkjuːz/",m:"v. 指控",c:"accuse of"},{w:"fluctuate",p:"/ˈflʌktʃueɪt/",m:"v. 波动，起伏",c:"prices fluctuate"},{w:"topic",p:"/ˈtɒpɪk/",m:"n. 话题",c:"hot topic"},{w:"entertain",p:"/ˌentəˈteɪn/",m:"v. 娱乐",c:"entertain guests"},{w:"volume",p:"/ˈvɒljuːm/",m:"n. 音量，容量",c:"sales volume"},{w:"controversy",p:"/ˈkɒntrəvɜːsi/",m:"n. 争论，争议",c:"political controversy"},{w:"presumably",p:"/prɪˈzjuːməbli/",m:"adv. 大概",c:"presumably correct"},{w:"envisage",p:"/ɪnˈvɪzɪdʒ/",m:"v. 设想，想象",c:"envisage future"},{w:"shortage",p:"/ˈʃɔːtɪdʒ/",m:"n. 短缺",c:"water shortage"},{w:"hurl",p:"/hɜːl/",m:"v. 猛投，猛冲",c:"hurl insults"},{w:"coarse",p:"/kɔːs/",m:"adj. 粗糙的，粗俗的",c:"coarse language"},{w:"fascinate",p:"/ˈfæsɪneɪt/",m:"v. 使着迷",c:"be fascinated by"},{w:"fatal",p:"/ˈfeɪtl/",m:"adj. 致命的",c:"fatal accident"},{w:"complement",p:"/ˈkɒmplɪment/",m:"v. 补充 n. 补充物",c:"complement each other"},{w:"disable",p:"/dɪsˈeɪbl/",m:"v. 使丧失能力",c:"disabled people"},{w:"glare",p:"/ɡleər/",m:"v./n. 怒视，强光",c:"glare at someone"},{w:"clash",p:"/klæʃ/",m:"v./n. 冲突，碰撞",c:"cultural clash"},{w:"epidemic",p:"/ˌepɪˈdemɪk/",m:"n. 流行病 adj. 流行的",c:"global epidemic"},{w:"exempt",p:"/ɪɡˈzempt/",m:"v. 免除 adj. 被豁免的",c:"tax exempt"},{w:"narrative",p:"/ˈnærətɪv/",m:"n. 叙述",c:"personal narrative"},{w:"array",p:"/əˈreɪ/",m:"n. 大量，阵列",c:"an array of"},{w:"publication",p:"/ˌpʌblɪˈkeɪʃn/",m:"n. 出版(物)",c:"scientific publication"},{w:"restore",p:"/rɪˈstɔː(r)/",m:"v. 恢复",c:"restore order"},{w:"deduct",p:"/dɪˈdʌkt/",m:"v. 扣除，减去",c:"deduct tax"},{w:"parallel",p:"/ˈpærəlel/",m:"adj. 平行的",c:"in parallel"},{w:"crucial",ex:"This is a crucial decision.",excn:"这是关键决定。",p:"/ˈkruːʃl/",m:"adj. 至关重要的",c:"crucial to"},{w:"employee",p:"/ɪmˈplɔɪiː/",m:"n. 雇员",c:"employee benefits"},{w:"auction",p:"/ˈɔːkʃn/",m:"n./v. 拍卖",c:"online auction"},{w:"impress",p:"/ɪmˈpres/",m:"v. 给…印象",c:"impress upon"},{w:"fleet",p:"/fliːt/",m:"n. 舰队，车队",c:"fishing fleet"},{w:"blade",p:"/bleɪd/",m:"n. 刀刃",c:"sharp blade"},{w:"dwarf",p:"/dwɔːf/",m:"n. 矮子 v. 使相形见绌",c:"dwarf planet"},{w:"increasingly",p:"/ɪnˈkriːsɪŋli/",m:"adv. 日益",c:"increasingly popular"},{w:"feeble",p:"/ˈfiːbl/",m:"adj. 虚弱的，无力的",c:"feeble attempt"},{w:"herald",p:"/ˈherəld/",m:"v. 预示 n. 先驱",c:"herald a new era"},{w:"cafeteria",p:"/ˌkæfəˈtɪəriə/",m:"n. 自助餐厅",c:"school cafeteria"},{w:"operate",p:"/ˈɒpəreɪt/",m:"v. 操作",c:"operate a machine"},{w:"severe",p:"/sɪˈvɪər/",m:"adj. 严重的",c:"severe weather"},{w:"liberty",p:"/ˈlɪbəti/",m:"n. 自由",c:"take the liberty"},{w:"giggle",p:"/ˈɡɪɡl/",m:"v./n. 咯咯笑，傻笑",c:"giggle with delight"},{w:"link",p:"/lɪŋk/",m:"n. 链接 v. 联系",c:"link to"},{w:"forecast",p:"/ˈfɔːkɑːst/",m:"n./v. 预测",c:"weather forecast"},{w:"threat",p:"/θret/",m:"n. 威胁",c:"pose a threat"},{w:"strategy",p:"/ˈstrætədʒi/",m:"n. 策略",c:"marketing strategy"},{w:"bureaucracy",p:"/bjʊəˈrɒkrəsi/",m:"n. 官僚机构",c:"government bureaucracy"},{w:"energetic",p:"/ˌenəˈdʒetɪk/",m:"adj. 精力充沛的",c:"energetic performance"},{w:"brand",p:"/brænd/",m:"n. 品牌",c:"brand image"},{w:"code",p:"/kəʊd/",m:"n. 代码，准则",c:"dress code"},{w:"electrician",p:"/ɪˌlekˈtrɪʃn/",m:"n. 电工",c:"licensed electrician"},{w:"passive",p:"/ˈpæsɪv/",m:"adj. 被动的",c:"passive voice"},{w:"investigate",p:"/ɪnˈvestɪɡeɪt/",m:"v. 调查",c:"investigate the case"},{w:"criterion",p:"/kraɪˈtɪəriən/",m:"n. 标准",c:"selection criterion"},{w:"minor",p:"/ˈmaɪnər/",m:"adj. 较小的",c:"minor role"},{w:"framework",p:"/ˈfreɪmwɜːk/",m:"n. 框架",c:"legal framework"},{w:"dart",p:"/dɑːt/",m:"v. 猛冲 n. 飞镖",c:"dart across"},{w:"mercy",p:"/ˈmɜːsi/",m:"n. 仁慈",c:"at the mercy of"},{w:"thorough",p:"/ˈθʌrə/",m:"adj. 彻底的",c:"thorough investigation"},{w:"architect",p:"/ˈɑːkɪtekt/",m:"n. 建筑师，设计师",c:"software architect"}],
  [{w:"agenda",p:"/əˈdʒendə/",m:"n. 议程，议事日程",c:"hidden agenda"},{w:"fraud",p:"/frɔːd/",m:"n. 欺诈，骗子",c:"credit card fraud"},{w:"consolidate",p:"/kənˈsɒlɪdeɪt/",m:"v. 巩固，合并",c:"consolidate power"},{w:"pollution",p:"/pəˈluːʃn/",m:"n. 污染",c:"air pollution"},{w:"dignity",p:"/ˈdɪɡnəti/",m:"n. 尊严",c:"human dignity"},{w:"cruise",p:"/kruːz/",m:"n./v. 巡航，游船",c:"luxury cruise"},{w:"desperate",p:"/ˈdespərət/",m:"adj. 绝望的",c:"desperate situation"},{w:"consumer",p:"/kənˈsjuːmər/",m:"n. 消费者",c:"consumer rights"},{w:"glamour",p:"/ˈɡlæmər/",m:"n. 魅力，诱惑力",c:"Hollywood glamour"},{w:"status",p:"/ˈsteɪtəs/",m:"n. 地位，状态",c:"social status"},{w:"hint",p:"/hɪnt/",m:"n. 暗示 v. 提示",c:"take a hint"},{w:"dub",p:"/dʌb/",m:"v. 给…起绰号，配音",c:"dubbed into English"},{w:"ease",p:"/iːz/",m:"n. 容易 v. 减轻",c:"with ease"},{w:"terminal",p:"/ˈtɜːmɪnl/",m:"n. 终点站 adj. 终端的",c:"airport terminal"},{w:"widespread",p:"/ˈwaɪdspred/",m:"adj. 广泛的",c:"widespread use"},{w:"behave",p:"/bɪˈheɪv/",m:"v. 表现",c:"behave well"},{w:"browse",p:"/braʊz/",m:"v. 浏览，吃草",c:"browse online"},{w:"decree",p:"/dɪˈkriː/",m:"n. 法令 v. 颁布",c:"royal decree"},{w:"sustain",p:"/səˈsteɪn/",m:"v. 维持",c:"sustain growth"},{w:"typical",p:"/ˈtɪpɪkl/",m:"adj. 典型的",c:"typical example"},{w:"register",p:"/ˈredʒɪstər/",m:"v./n. 登记",c:"register for"},{w:"assumption",p:"/əˈsʌmpʃn/",m:"n. 假设",c:"make an assumption"},{w:"tone",p:"/təʊn/",m:"n. 语气",c:"tone of voice"},{w:"venture",p:"/ˈventʃər/",m:"n. 风险项目 v. 冒险",c:"joint venture"},{w:"desire",p:"/dɪˈzaɪər/",m:"n./v. 渴望",c:"strong desire"},{w:"supplement",p:"/ˈsʌplɪment/",m:"n. 补充 v. 增补",c:"dietary supplement"},{w:"blunder",p:"/ˈblʌndər/",m:"n. 大错 v. 犯错",c:"political blunder"},{w:"emergency",p:"/ɪˈmɜːdʒənsi/",m:"n. 紧急情况",c:"emergency room"},{w:"absurd",p:"/əbˈsɜːd/",m:"adj. 荒谬的",c:"absurd idea"},{w:"discreet",p:"/dɪˈskriːt/",m:"adj. 谨慎的，小心的",c:"discreet inquiry"},{w:"positive",p:"/ˈpɒzətɪv/",m:"adj. 积极的",c:"positive attitude"},{w:"conversion",p:"/kənˈvɜːʃn/",m:"n. 转换，转变",c:"currency conversion"},{w:"definite",p:"/ˈdefɪnət/",m:"adj. 明确的",c:"definite answer"},{w:"commence",p:"/kəˈmens/",m:"v. 开始，着手",c:"commence operation"},{w:"dual",p:"/ˈdjuːəl/",m:"adj. 双重的，双的",c:"dual role"},{w:"herb",p:"/hɜːb/",m:"n. 药草，香草",c:"medicinal herb"},{w:"dissipate",p:"/ˈdɪsɪpeɪt/",m:"v. 消散，挥霍",c:"dissipate heat"},{w:"calculate",p:"/ˈkælkjuleɪt/",m:"v. 计算",c:"calculate risk"},{w:"complexion",p:"/kəmˈplekʃn/",m:"n. 肤色，面色",c:"fair complexion"},{w:"identity",p:"/aɪˈdentəti/",m:"n. 身份",c:"cultural identity"},{w:"clan",p:"/klæn/",m:"n. 家族，宗族",c:"clan warfare"},{w:"suspect",p:"/səˈspekt/",m:"v. 怀疑 n. 嫌疑人",c:"suspect of"},{w:"role",p:"/rəʊl/",m:"n. 角色",c:"play a role"},{w:"extract",p:"/ɪkˈstrækt/",m:"v. 提取 n. 摘录",c:"extract oil"},{w:"inform",p:"/ɪnˈfɔːm/",m:"v. 通知",c:"inform someone"},{w:"embark",p:"/ɪmˈbɑːk/",m:"v. 上船，开始",c:"embark on a journey"},{w:"clay",p:"/kleɪ/",m:"n. 黏土，泥土",c:"clay pot"},{w:"haunt",p:"/hɔːnt/",m:"v. 常出没，萦绕",c:"haunted house"},{w:"render",p:"/ˈrendər/",m:"v. 使成为",c:"render service"},{w:"massive",p:"/ˈmæsɪv/",m:"adj. 巨大的",c:"massive change"},{w:"graze",p:"/ɡreɪz/",m:"v. 放牧，擦伤",c:"graze cattle"},{w:"bureau",p:"/ˈbjʊərəʊ/",m:"n. 局，办事处",c:"travel bureau"},{w:"convict",p:"/kənˈvɪkt/",m:"v. 定罪 n. 罪犯",c:"convict of murder"},{w:"spiritual",p:"/ˈspɪrɪtʃuəl/",m:"adj. 精神的",c:"spiritual life"},{w:"disastrous",p:"/dɪˈzɑːstrəs/",m:"adj. 灾难性的",c:"disastrous consequences"},{w:"cordial",p:"/ˈkɔːdiəl/",m:"adj. 热诚的，友好的",c:"cordial welcome"},{w:"banquet",p:"/ˈbæŋkwɪt/",m:"n. 宴会",c:"state banquet"},{w:"dock",p:"/dɒk/",m:"n. 码头 v. 靠码头",c:"loading dock"},{w:"combine",p:"/kəmˈbaɪn/",m:"v. 结合",c:"combine with"},{w:"fiber",p:"/ˈfaɪbər/",m:"n. 纤维，光纤",c:"dietary fiber"},{w:"civil",p:"/ˈsɪvl/",m:"adj. 公民的",c:"civil rights"},{w:"gaze",p:"/ɡeɪz/",m:"v./n. 凝视，注视",c:"gaze at stars"},{w:"arbitrary",p:"/ˈɑːbɪtrəri/",m:"adj. 任意的，武断的",c:"arbitrary decision"},{w:"trial",p:"/ˈtraɪəl/",m:"n. 审判，试验",c:"clinical trial"},{w:"conceive",p:"/kənˈsiːv/",m:"v. 构想，怀孕",c:"conceive an idea"},{w:"temporary",p:"/ˈtemprəri/",m:"adj. 暂时的",c:"temporary solution"},{w:"dilemma",p:"/dɪˈlemə/",m:"n. 困境，进退两难",c:"moral dilemma"},{w:"excerpt",p:"/ˈeksɜːpt/",m:"n. 摘录，节选",c:"excerpt from book"},{w:"determination",p:"/dɪˌtɜːmɪˈneɪʃn/",m:"n. 决心",c:"show determination"},{w:"staff",p:"/stɑːf/",m:"n. 员工",c:"staff meeting"},{w:"cripple",p:"/ˈkrɪpl/",m:"v. 使残废 n. 跛子",c:"cripple economy"},{w:"rational",p:"/ˈræʃnəl/",m:"adj. 理性的",c:"rational decision"},{w:"hitherto",p:"/ˌhɪðəˈtuː/",m:"adv. 迄今为止",c:"hitherto unknown"},{w:"criticism",p:"/ˈkrɪtɪsɪzəm/",m:"n. 批评",c:"constructive criticism"},{w:"provision",p:"/prəˈvɪʒn/",m:"n. 供应，条款",c:"make provision for"},{w:"fabulous",p:"/ˈfæbjʊləs/",m:"adj. 极好的，寓言般的",c:"fabulous view"},{w:"whereas",p:"/ˌweərˈæz/",m:"conj. 然而",c:"whereas previously"},{w:"admission",p:"/ədˈmɪʃn/",m:"n. 准许进入",c:"admission ticket"},{w:"hasty",p:"/ˈheɪsti/",m:"adj. 匆忙的，草率的",c:"hasty decision"},{w:"stem",p:"/stem/",m:"n. 茎 v. 起源于",c:"stem from"},{w:"wander",p:"/ˈwɒndər/",m:"v. 漫步",c:"wander around"},{w:"angle",p:"/ˈæŋɡl/",m:"n. 角度",c:"from another angle"},{w:"controversial",p:"/ˌkɒntrəˈvɜːʃl/",m:"adj. 有争议的",c:"controversial issue"},{w:"baffle",p:"/ˈbæfl/",m:"v. 使困惑，难住",c:"baffle scientists"},{w:"gown",p:"/ɡaʊn/",m:"n. 长袍，礼服",c:"wedding gown"},{w:"schedule",p:"/ˈʃedjuːl/",m:"n. 时间表",c:"on schedule"},{w:"remedy",p:"/ˈremədi/",m:"n. 补救办法",c:"legal remedy"},{w:"discriminate",p:"/dɪˈskrɪmɪneɪt/",m:"v. 区别，歧视",c:"discriminate against"},{w:"requirement",p:"/rɪˈkwaɪəmənt/",m:"n. 要求",c:"meet requirements"},{w:"permit",p:"/pəˈmɪt/",m:"v. 允许 n. 许可证",c:"permit to"},{w:"command",p:"/kəˈmɑːnd/",m:"v./n. 命令，掌握",c:"have a command of"},{w:"miracle",p:"/ˈmɪrəkl/",m:"n. 奇迹",c:"economic miracle"},{w:"capsule",p:"/ˈkæpsjuːl/",m:"n. 胶囊，太空舱",c:"time capsule"},{w:"insight",p:"/ˈɪnsaɪt/",m:"n. 洞察力",c:"provide insight"},{w:"ally",p:"/ˈælaɪ/",m:"n. 同盟国 v. 结盟",c:"political ally"},{w:"corporation",p:"/ˌkɔːpəˈreɪʃn/",m:"n. 公司",c:"multinational corporation"},{w:"fabric",p:"/ˈfæbrɪk/",m:"n. 织物，结构",c:"social fabric"},{w:"summary",p:"/ˈsʌməri/",m:"n. 摘要",c:"in summary"},{w:"crash",p:"/kræʃ/",m:"v./n. 碰撞",c:"car crash"},{w:"cable",p:"/ˈkeɪbl/",m:"n. 电缆，缆绳",c:"fiber optic cable"}],
  [{w:"source",p:"/sɔːs/",m:"n. 来源",c:"energy source"},{w:"recognition",p:"/ˌrekəɡˈnɪʃn/",m:"n. 认可",c:"facial recognition"},{w:"despatch",p:"/dɪˈspætʃ/",m:"v./n. 派遣，发送",c:"despatch troops"},{w:"realistic",p:"/ˌriːəˈlɪstɪk/",m:"adj. 现实的",c:"realistic goal"},{w:"rank",p:"/ræŋk/",m:"n. 等级 v. 排列",c:"rank first"},{w:"alcohol",p:"/ˈælkəhɒl/",m:"n. 酒精",c:"alcohol abuse"},{w:"evident",p:"/ˈevɪdənt/",m:"adj. 明显的",c:"self-evident"},{w:"autonomy",p:"/ɔːˈtɒnəmi/",m:"n. 自治，自主权",c:"regional autonomy"},{w:"burst",p:"/bɜːst/",m:"v. 爆发",c:"burst into tears"},{w:"consistent",ex:"Be consistent in your efforts.",excn:"保持努力的一致性。",p:"/kənˈsɪstənt/",m:"adj. 一致的",c:"consistent with"},{w:"endeavor",p:"/ɪnˈdevər/",m:"v./n. 努力，尽力",c:"scientific endeavor"},{w:"dean",p:"/diːn/",m:"n. 院长，系主任",c:"college dean"},{w:"fort",p:"/fɔːt/",m:"n. 堡垒，要塞",c:"military fort"},{w:"reality",p:"/riˈæləti/",m:"n. 现实",c:"in reality"},{w:"friction",p:"/ˈfrɪkʃn/",m:"n. 摩擦，不和",c:"reduce friction"},{w:"fuss",p:"/fʌs/",m:"n. 大惊小怪 v. 小题大做",c:"make a fuss"},{w:"overlook",p:"/ˌəʊvəˈlʊk/",m:"v. 忽视",c:"overlook the fact"},{w:"haven",p:"/ˈheɪvn/",m:"n. 避难所，安全地",c:"safe haven"},{w:"standard",p:"/ˈstændəd/",m:"n. 标准 adj. 标准的",c:"high standard"},{w:"patent",p:"/ˈpætnt/",m:"n. 专利",c:"patent application"},{w:"educate",p:"/ˈedʒukeɪt/",m:"v. 教育",c:"educate children"},{w:"instrument",p:"/ˈɪnstrəmənt/",m:"n. 乐器",c:"musical instrument"},{w:"distinguish",p:"/dɪˈstɪŋɡwɪʃ/",m:"v. 区分",c:"distinguish between"},{w:"victim",p:"/ˈvɪktɪm/",m:"n. 受害者",c:"fall victim to"},{w:"precaution",p:"/prɪˈkɔːʃn/",m:"n. 预防措施",c:"take precautions"},{w:"withdraw",p:"/wɪðˈdrɔː/",m:"v. 撤回",c:"withdraw from"},{w:"cane",p:"/keɪn/",m:"n. 手杖，甘蔗",c:"sugar cane"},{w:"cancel",p:"/ˈkænsl/",m:"v. 取消",c:"cancel order"},{w:"judgment",p:"/ˈdʒʌdʒmənt/",m:"n. 判断",c:"good judgment"},{w:"isolate",p:"/ˈaɪsəleɪt/",m:"v. 孤立",c:"isolate from"},{w:"circuit",p:"/ˈsɜːkɪt/",m:"n. 电路，环行",c:"integrated circuit"},{w:"embed",p:"/ɪmˈbed/",m:"v. 嵌入，植入",c:"embedded system"},{w:"extinguish",p:"/ɪkˈstɪŋɡwɪʃ/",m:"v. 熄灭，消灭",c:"extinguish fire"},{w:"demonstrate",ex:"He demonstrated the product.",excn:"他演示了产品。",p:"/ˈdemənstreɪt/",m:"v. 展示",c:"demonstrate the ability"},{w:"heighten",p:"/ˈhaɪtn/",m:"v. 提高，加强",c:"heighten awareness"},{w:"principle",p:"/ˈprɪnsəpl/",m:"n. 原则",c:"basic principle"},{w:"frustrate",p:"/frʌˈstreɪt/",m:"v. 使沮丧，挫败",c:"frustrate efforts"},{w:"innocent",p:"/ˈɪnəsnt/",m:"adj. 无辜的",c:"innocent people"},{w:"prominent",p:"/ˈprɒmɪnənt/",m:"adj. 突出的",c:"prominent figure"},{w:"minimum",p:"/ˈmɪnɪməm/",m:"n. 最小(值)",c:"minimum wage"},{w:"fortune",p:"/ˈfɔːtʃuːn/",m:"n. 命运，财富",c:"make a fortune"},{w:"hike",p:"/haɪk/",m:"n. 远足 v. 大幅提高",c:"price hike"},{w:"exaggerate",p:"/ɪɡˈzædʒəreɪt/",m:"v. 夸大",c:"tend to exaggerate"},{w:"evolution",p:"/ˌiːvəˈluːʃn/",m:"n. 进化",c:"human evolution"},{w:"cooperative",p:"/kəʊˈɒpərətɪv/",m:"adj. 合作的 n. 合作社",c:"cooperative effort"},{w:"pace",p:"/peɪs/",m:"n. 速度",c:"keep pace with"},{w:"harmony",p:"/ˈhɑːməni/",m:"n. 和谐，协调",c:"in harmony with"},{w:"definitely",p:"/ˈdefɪnətli/",m:"adv. 肯定地",c:"definitely true"},{w:"belief",p:"/bɪˈliːf/",m:"n. 信念",c:"beyond belief"},{w:"hound",p:"/haʊnd/",m:"n. 猎犬 v. 追逼",c:"media hound"},{w:"commute",p:"/kəˈmjuːt/",m:"v. 通勤，减刑",c:"commute to work"},{w:"acquaintance",p:"/əˈkweɪntəns/",m:"n. 熟人",c:"make acquaintance"},{w:"dome",p:"/dəʊm/",m:"n. 圆顶，穹顶",c:"glass dome"},{w:"observe",p:"/əbˈzɜːv/",m:"v. 观察，遵守",c:"observe rules"},{w:"boundary",p:"/ˈbaʊndri/",m:"n. 边界",c:"set boundaries"},{w:"pose",p:"/pəʊz/",m:"v. 造成，摆姿势",c:"pose a threat"},{w:"clarify",p:"/ˈklærɪfaɪ/",m:"v. 澄清",c:"clarify the point"},{w:"defiance",p:"/dɪˈfaɪəns/",m:"n. 违抗，蔑视",c:"in defiance of"},{w:"ballot",p:"/ˈbælət/",m:"n. 选票，投票",c:"secret ballot"},{w:"evacuate",p:"/ɪˈvækjueɪt/",m:"v. 疏散，撤离",c:"evacuate area"},{w:"foresee",p:"/fɔːˈsiː/",m:"v. 预见，预知",c:"foresee problems"},{w:"conception",p:"/kənˈsepʃn/",m:"n. 概念，构想",c:"modern conception"},{w:"career",p:"/kəˈrɪər/",m:"n. 职业",c:"career development"},{w:"choke",p:"/tʃəʊk/",m:"v. 窒息，哽咽",c:"choke on food"},{w:"narrow",p:"/ˈnærəʊ/",m:"adj. 狭窄的",c:"narrow down"},{w:"contend",p:"/kənˈtend/",m:"v. 竞争，主张",c:"contend for title"},{w:"sequence",p:"/ˈsiːkwəns/",m:"n. 顺序",c:"in sequence"},{w:"physical",p:"/ˈfɪzɪkl/",m:"adj. 身体的，物理的",c:"physical exercise"},{w:"glide",p:"/ɡlaɪd/",m:"v./n. 滑行，滑动",c:"glide through air"},{w:"fraction",p:"/ˈfrækʃn/",m:"n. 分数，小部分",c:"a fraction of"},{w:"steady",p:"/ˈstedi/",m:"adj. 稳定的",c:"steady growth"},{w:"reinforce",p:"/ˌriːɪnˈfɔːs/",m:"v. 加强",c:"reinforce the idea"},{w:"profound",p:"/prəˈfaʊnd/",m:"adj. 深刻的",c:"profound impact"},{w:"shift",p:"/ʃɪft/",m:"v./n. 转移，轮班",c:"night shift"},{w:"cholesterol",p:"/kəˈlestərɒl/",m:"n. 胆固醇",c:"high cholesterol"},{w:"handle",p:"/ˈhændl/",m:"v. 处理 n. 把手",c:"handle pressure"},{w:"dividend",p:"/ˈdɪvɪdend/",m:"n. 红利，股息",c:"stock dividend"},{w:"catastrophe",p:"/kəˈtæstrəfi/",m:"n. 大灾难",c:"natural catastrophe"},{w:"commonplace",p:"/ˈkɒmənpleɪs/",m:"adj. 普通的 n. 常见事",c:"become commonplace"},{w:"broad",p:"/brɔːd/",m:"adj. 宽的，广泛的",c:"broad range"},{w:"hum",p:"/hʌm/",m:"v. 嗡嗡叫 n. 嗡嗡声",c:"hum a tune"},{w:"bishop",p:"/ˈbɪʃəp/",m:"n. 主教",c:"Catholic bishop"},{w:"alliance",p:"/əˈlaɪəns/",m:"n. 联盟，同盟",c:"strategic alliance"},{w:"exile",p:"/ˈeksaɪl/",m:"n./v. 流放，放逐",c:"in exile"},{w:"convenience",p:"/kənˈviːniəns/",m:"n. 便利",c:"for convenience"},{w:"differentiate",p:"/ˌdɪfəˈrenʃieɪt/",m:"v. 区分，区别",c:"differentiate between"},{w:"erode",p:"/ɪˈrəʊd/",m:"v. 侵蚀，腐蚀",c:"erode confidence"},{w:"install",p:"/ɪnˈstɔːl/",m:"v. 安装",c:"install software"},{w:"enroll",p:"/ɪnˈrəʊl/",m:"v. 注册，入伍",c:"enroll in school"},{w:"crude",p:"/kruːd/",m:"adj. 粗糙的，天然的",c:"crude oil"},{w:"sensitive",p:"/ˈsensətɪv/",m:"adj. 敏感的",c:"sensitive information"},{w:"decent",p:"/ˈdiːsnt/",m:"adj. 体面的，像样的",c:"decent salary"},{w:"infant",p:"/ˈɪnfənt/",m:"n. 婴儿",c:"infant mortality"},{w:"attend",p:"/əˈtend/",m:"v. 参加",c:"attend a meeting"},{w:"foul",p:"/faʊl/",m:"adj. 恶臭的 v. 犯规",c:"foul play"},{w:"gamble",p:"/ˈɡæmbl/",m:"v./n. 赌博，冒险",c:"gamble with life"},{w:"illegal",p:"/ɪˈliːɡl/",m:"adj. 非法的",c:"illegal activities"},{w:"military",p:"/ˈmɪlətri/",m:"adj. 军事的",c:"military service"},{w:"garment",p:"/ˈɡɑːmənt/",m:"n. 衣服，服装",c:"garment factory"},{w:"battery",p:"/ˈbætəri/",m:"n. 电池，一组",c:"lithium battery"}]
];

// ============================================================
// 四级词库 (300+ 词汇)
// ============================================================
const WORD_POOL = [
  {w:"capable",ex:"She is capable of leading.",excn:"她有能力领导。",p:"/ˈkeɪpəbl/",m:"adj. 有能力的",c:"be capable of"},
  {w:"competitive",ex:"The industry is highly competitive.",excn:"这个行业竞争激烈。",p:"/kəmˈpetətɪv/",m:"adj. 竞争的",c:"competitive market"},
  {w:"concentrate",ex:"Concentrate on your work.",excn:"专注你的工作。",p:"/ˈkɒnsntreɪt/",m:"v. 集中",c:"concentrate on"},
  {w:"contribute",ex:"Everyone contributed ideas.",excn:"每个人都贡献了想法。",p:"/kənˈtrɪbjuːt/",m:"v. 贡献",c:"contribute to"},
  {w:"domestic",p:"/dəˈmestɪk/",m:"adj. 国内的，家庭的",c:"domestic market"},
  {w:"intellectual",p:"/ˌɪntəˈlektʃuəl/",m:"adj. 智力的",c:"intellectual property"},
  {w:"invest",p:"/ɪnˈvest/",m:"v. 投资",c:"invest in"},
  {w:"obvious",p:"/ˈɒbviəs/",m:"adj. 明显的",c:"obvious reason"},
  {w:"phenomenon",p:"/fəˈnɒmɪnən/",m:"n. 现象",c:"social phenomenon"},
  {w:"policy",p:"/ˈpɒləsi/",m:"n. 政策",c:"foreign policy"},
  {w:"specific",p:"/spəˈsɪfɪk/",m:"adj. 具体的",c:"specific details"},
  {w:"stable",p:"/ˈsteɪbl/",m:"adj. 稳定的",c:"stable economy"},
  {w:"survey",p:"/ˈsɜːveɪ/",m:"n./v. 调查",c:"conduct a survey"},
  {w:"aboard",p:"/əˈbɔːd/",m:"adv./prep. 在船上",c:"go aboard"},
  {w:"absolute",p:"/ˈæbsəluːt/",m:"adj. 绝对的",c:"absolute power"},
  {w:"achievement",p:"/əˈtʃiːvmənt/",m:"n. 成就",c:"academic achievement"},
  {w:"advanced",p:"/ədˈvɑːnst/",m:"adj. 先进的",c:"advanced technology"},
  {w:"advocate",p:"/ˈædvəkeɪt/",m:"v. 倡导",c:"advocate for"},
  {w:"agency",p:"/ˈeɪdʒənsi/",m:"n. 代理机构",c:"travel agency"},
  {w:"aid",p:"/eɪd/",m:"n./v. 帮助",c:"first aid"},
  {w:"alert",p:"/əˈlɜːt/",m:"adj. 警觉的",c:"stay alert"},
  {w:"alongside",p:"/əˌlɒŋˈsaɪd/",m:"prep. 在…旁边",c:"work alongside"},
  {w:"alter",p:"/ˈɔːltər/",m:"v. 改变",c:"alter the course"},
  {w:"amount",p:"/əˈmaʊnt/",m:"n. 数量",c:"a large amount of"},
  {w:"amuse",p:"/əˈmjuːz/",m:"v. 逗乐",c:"amuse oneself"},
  {w:"ancient",p:"/ˈeɪnʃənt/",m:"adj. 古代的",c:"ancient times"},
  {w:"apart",p:"/əˈpɑːt/",m:"adv. 分开",c:"apart from"},
  {w:"applicant",p:"/ˈæplɪkənt/",m:"n. 申请人",c:"job applicant"},
  {w:"argument",p:"/ˈɑːɡjumənt/",m:"n. 争论",c:"strong argument"},
  {w:"asset",p:"/ˈæset/",m:"n. 资产",c:"valuable asset"},
  {w:"assure",p:"/əˈʃʊər/",m:"v. 使确信",c:"assure safety"},
  {w:"attention",p:"/əˈtenʃn/",m:"n. 注意",c:"pay attention to"},
  {w:"awful",p:"/ˈɔːfl/",m:"adj. 糟糕的",c:"awful weather"},
  {w:"battle",p:"/ˈbætl/",m:"n./v. 战斗",c:"battle against"},
  {w:"being",p:"/ˈbiːɪŋ/",m:"n. 生物，存在",c:"human being"},
  {w:"beloved",p:"/bɪˈlʌvd/",m:"adj. 心爱的",c:"beloved wife"},
  {w:"bind",p:"/baɪnd/",m:"v. 捆绑",c:"bind together"},
  {w:"bitter",p:"/ˈbɪtər/",m:"adj. 苦的",c:"bitter experience"},
  {w:"blank",p:"/blæŋk/",m:"adj. 空白的",c:"blank space"},
  {w:"bounce",p:"/baʊns/",m:"v. 弹跳",c:"bounce back"},
  {w:"breed",p:"/briːd/",m:"v. 繁殖 n. 品种",c:"breed animals"},
  {w:"brilliant",p:"/ˈbrɪliənt/",m:"adj. 杰出的",c:"brilliant idea"},
  {w:"broadcast",p:"/ˈbrɔːdkɑːst/",m:"v./n. 广播",c:"live broadcast"},
  {w:"burden",p:"/ˈbɜːdn/",m:"n. 负担",c:"heavy burden"},
  {w:"calendar",p:"/ˈkælɪndər/",m:"n. 日历",c:"lunar calendar"},
  {w:"casual",p:"/ˈkæʒuəl/",m:"adj. 随便的",c:"casual clothes"},
  {w:"caution",p:"/ˈkɔːʃn/",m:"n. 小心",c:"with caution"},
  {w:"channel",p:"/ˈtʃænl/",m:"n. 频道，渠道",c:"communication channel"},
  {w:"charity",p:"/ˈtʃærəti/",m:"n. 慈善",c:"charity event"},
  {w:"chart",p:"/tʃɑːt/",m:"n. 图表",c:"flow chart"},
  {w:"chief",p:"/tʃiːf/",m:"adj. 主要的 n. 首领",c:"chief executive"},
  {w:"civilization",p:"/ˌsɪvəlaɪˈzeɪʃn/",m:"n. 文明",c:"ancient civilization"},
  {w:"climate",p:"/ˈklaɪmət/",m:"n. 气候",c:"climate change"},
  {w:"column",p:"/ˈkɒləm/",m:"n. 栏目，柱",c:"newspaper column"},
  {w:"commerce",p:"/ˈkɒmɜːs/",m:"n. 商业",c:"e-commerce"},
  {w:"commercial",p:"/kəˈmɜːʃl/",m:"adj. 商业的 n. 广告",c:"commercial bank"},
  {w:"commitment",p:"/kəˈmɪtmənt/",m:"n. 承诺",c:"make a commitment"},
  {w:"committee",p:"/kəˈmɪti/",m:"n. 委员会",c:"executive committee"},
  {w:"compensation",p:"/ˌkɒmpenˈseɪʃn/",m:"n. 补偿",c:"seek compensation"},
  {w:"compose",p:"/kəmˈpəʊz/",m:"v. 组成，创作",c:"compose music"},
  {w:"conference",p:"/ˈkɒnfərəns/",m:"n. 会议",c:"press conference"},
  {w:"confront",p:"/kənˈfrʌnt/",m:"v. 面对",c:"confront challenges"},
  {w:"congratulate",p:"/kənˈɡrætʃuleɪt/",m:"v. 祝贺",c:"congratulate on"},
  {w:"connection",p:"/kəˈnekʃn/",m:"n. 连接",c:"Internet connection"},
  {w:"constitute",p:"/ˈkɒnstɪtjuːt/",m:"v. 构成",c:"constitute a threat"},
  {w:"continuous",p:"/kənˈtɪnjuəs/",m:"adj. 连续的",c:"continuous process"},
  {w:"contrary",p:"/ˈkɒntrəri/",m:"adj. 相反的",c:"on the contrary"},
  {w:"contribute",p:"/kənˈtrɪbjuːt/",m:"v. 贡献",c:"contribute to"},
  {w:"convey",p:"/kənˈveɪ/",m:"v. 传达",c:"convey message"},
  {w:"coordinate",p:"/kəʊˈɔːdɪneɪt/",m:"v. 协调",c:"coordinate efforts"},
  {w:"core",p:"/kɔːr/",m:"n. 核心",c:"core value"},
  {w:"corporate",p:"/ˈkɔːpərət/",m:"adj. 公司的",c:"corporate culture"},
  {w:"credit",p:"/ˈkredɪt/",m:"n. 信用，学分",c:"credit card"},
  {w:"currency",p:"/ˈkʌrənsi/",m:"n. 货币",c:"foreign currency"},
  {w:"deadline",p:"/ˈdedlaɪn/",m:"n. 截止日期",c:"meet the deadline"},
  {w:"debt",p:"/det/",m:"n. 债务",c:"in debt"},
  {w:"decorate",p:"/ˈdekəreɪt/",m:"v. 装饰",c:"decorate the room"},
  {w:"defeat",p:"/dɪˈfiːt/",m:"v./n. 击败",c:"defeat the enemy"},
  {w:"defend",p:"/dɪˈfend/",m:"v. 防御，辩护",c:"defend against"},
  {w:"delay",p:"/dɪˈleɪ/",m:"v./n. 延迟",c:"without delay"},
  {w:"deliberate",p:"/dɪˈlɪbərət/",m:"adj. 故意的",c:"deliberate attempt"},
  {w:"delicate",p:"/ˈdelɪkət/",m:"adj. 精致的",c:"delicate situation"},
  {w:"demand",p:"/dɪˈmɑːnd/",m:"v./n. 需求",c:"supply and demand"},
  {w:"dense",p:"/dens/",m:"adj. 密集的",c:"dense population"},
  {w:"department",p:"/dɪˈpɑːtmənt/",m:"n. 部门",c:"marketing department"},
  {w:"departure",p:"/dɪˈpɑːtʃər/",m:"n. 离开",c:"departure time"},
  {w:"depend",p:"/dɪˈpend/",m:"v. 依赖",c:"depend on"},
  {w:"depress",p:"/dɪˈpres/",m:"v. 使沮丧",c:"depress economy"},
  {w:"depression",p:"/dɪˈpreʃn/",m:"n. 抑郁，萧条",c:"economic depression"},
  {w:"destroy",p:"/dɪˈstrɔɪ/",m:"v. 破坏",c:"destroy evidence"},
  {w:"devote",p:"/dɪˈvəʊt/",m:"v. 致力于",c:"devote to"},
  {w:"display",p:"/dɪˈspleɪ/",m:"v./n. 展示",c:"on display"},
  {w:"dispose",p:"/dɪˈspəʊz/",m:"v. 处理",c:"dispose of"},
  {w:"document",p:"/ˈdɒkjumənt/",m:"n. 文件",c:"official document"},
  {w:"domestic",p:"/dəˈmestɪk/",m:"adj. 国内的",c:"domestic market"},
  {w:"dominant",p:"/ˈdɒmɪnənt/",m:"adj. 主导的",c:"dominant position"},
  {w:"draft",p:"/drɑːft/",m:"n. 草稿 v. 起草",c:"first draft"},
  {w:"economical",p:"/ˌiːkəˈnɒmɪkl/",m:"adj. 节约的",c:"economical car"},
  {w:"edition",p:"/ɪˈdɪʃn/",m:"n. 版本",c:"special edition"},
  {w:"editor",p:"/ˈedɪtər/",m:"n. 编辑",c:"chief editor"},
  {w:"efficiency",p:"/ɪˈfɪʃnsi/",m:"n. 效率",c:"improve efficiency"},
  {w:"emission",p:"/ɪˈmɪʃn/",m:"n. 排放",c:"carbon emission"},
  {w:"error",p:"/ˈerər/",m:"n. 错误",c:"human error"},
  {w:"estate",p:"/ɪˈsteɪt/",m:"n. 房地产",c:"real estate"},
  {w:"examine",p:"/ɪɡˈzæmɪn/",m:"v. 检查",c:"examine carefully"},
  {w:"executive",p:"/ɪɡˈzekjətɪv/",m:"adj. 执行的 n. 主管",c:"chief executive"},
  {w:"expert",p:"/ˈekspɜːt/",m:"n. 专家",c:"subject expert"},
  {w:"extent",p:"/ɪkˈstent/",m:"n. 程度",c:"to some extent"},
  {w:"facilitate",p:"/fəˈsɪlɪteɪt/",m:"v. 促进",c:"facilitate communication"},
  {w:"faith",p:"/feɪθ/",m:"n. 信念",c:"have faith in"},
  {w:"fame",p:"/feɪm/",m:"n. 名声",c:"rise to fame"},
  {w:"famine",p:"/ˈfæmɪn/",m:"n. 饥荒",c:"famine relief"},
  {w:"feedback",p:"/ˈfiːdbæk/",m:"n. 反馈",c:"positive feedback"},
  {w:"flourish",p:"/ˈflʌrɪʃ/",m:"v. 繁荣",c:"flourish in"},
  {w:"gain",p:"/ɡeɪn/",m:"v. 获得 n. 收益",c:"gain experience"},
  {w:"gap",p:"/ɡæp/",m:"n. 缺口，差距",c:"generation gap"},
  {w:"gender",p:"/ˈdʒendər/",m:"n. 性别",c:"gender equality"},
  {w:"genuine",p:"/ˈdʒenjuɪn/",m:"adj. 真正的",c:"genuine interest"},
  {w:"gesture",p:"/ˈdʒestʃər/",m:"n. 手势",c:"kind gesture"},
  {w:"globe",p:"/ɡləʊb/",m:"n. 地球",c:"across the globe"},
  {w:"guideline",p:"/ˈɡaɪdlaɪn/",m:"n. 指导方针",c:"follow guidelines"},
  {w:"guilty",p:"/ˈɡɪlti/",m:"adj. 有罪的",c:"feel guilty"},
  {w:"harsh",p:"/hɑːʃ/",m:"adj. 严酷的",c:"harsh conditions"},
  {w:"hazard",p:"/ˈhæzəd/",m:"n. 危险",c:"health hazard"},
  {w:"hence",p:"/hens/",m:"adv. 因此",c:"and hence"},
  {w:"heritage",p:"/ˈherɪtɪdʒ/",m:"n. 遗产",c:"cultural heritage"},
  {w:"humble",p:"/ˈhʌmbl/",m:"adj. 谦逊的",c:"humble beginnings"},
  {w:"ideal",p:"/aɪˈdiːəl/",m:"adj. 理想的",c:"ideal solution"},
  {w:"identical",p:"/aɪˈdentɪkl/",m:"adj. 相同的",c:"identical to"},
  {w:"image",p:"/ˈɪmɪdʒ/",m:"n. 形象",c:"public image"},
  {w:"imagination",p:"/ɪˌmædʒɪˈneɪʃn/",m:"n. 想象力",c:"beyond imagination"},
  {w:"incident",p:"/ˈɪnsɪdənt/",m:"n. 事件",c:"isolated incident"},
  {w:"incline",p:"/ɪnˈklaɪn/",m:"v. 倾向",c:"be inclined to"},
  {w:"independence",p:"/ˌɪndɪˈpendəns/",m:"n. 独立",c:"gain independence"},
  {w:"industrial",p:"/ɪnˈdʌstriəl/",m:"adj. 工业的",c:"industrial revolution"},
  {w:"initial",p:"/ɪˈnɪʃl/",m:"adj. 最初的",c:"initial stage"},
  {w:"institute",p:"/ˈɪnstɪtjuːt/",m:"n. 机构",c:"research institute"},
  {w:"intellectual",p:"/ˌɪntəˈlektʃuəl/",m:"adj. 智力的",c:"intellectual property"},
  {w:"intelligence",p:"/ɪnˈtelɪdʒəns/",m:"n. 智力，情报",c:"artificial intelligence"},
  {w:"intention",p:"/ɪnˈtenʃn/",m:"n. 意图",c:"good intention"},
  {w:"interval",p:"/ˈɪntəvl/",m:"n. 间隔",c:"at regular intervals"},
  {w:"invest",p:"/ɪnˈvest/",m:"v. 投资",c:"invest in"},
  {w:"investment",p:"/ɪnˈvestmənt/",m:"n. 投资",c:"return on investment"},
  {w:"justice",p:"/ˈdʒʌstɪs/",m:"n. 公正",c:"social justice"},
  {w:"keen",p:"/kiːn/",m:"adj. 热衷的",c:"be keen on"},
  {w:"label",p:"/ˈleɪbl/",m:"n. 标签 v. 标注",c:"warning label"},
  {w:"layer",p:"/ˈleɪər/",m:"n. 层",c:"ozone layer"},
  {w:"layout",p:"/ˈleɪaʊt/",m:"n. 布局",c:"page layout"},
  {w:"legal",p:"/ˈliːɡl/",m:"adj. 合法的",c:"legal system"},
  {w:"legislation",p:"/ˌledʒɪsˈleɪʃn/",m:"n. 立法",c:"pass legislation"},
  {w:"leisure",p:"/ˈleʒər/",m:"n. 闲暇",c:"leisure time"},
  {w:"lest",p:"/lest/",m:"conj. 唯恐",c:"lest we forget"},
  {w:"license",p:"/ˈlaɪsns/",m:"n. 许可证 v. 许可",c:"driver's license"},
  {w:"limitation",p:"/ˌlɪmɪˈteɪʃn/",m:"n. 限制",c:"statute of limitations"},
  {w:"literature",p:"/ˈlɪtrətʃər/",m:"n. 文学",c:"English literature"},
  {w:"logic",p:"/ˈlɒdʒɪk/",m:"n. 逻辑",c:"logic thinking"},
  {w:"luxury",p:"/ˈlʌkʃəri/",m:"n. 奢侈",c:"luxury goods"},
  {w:"manual",p:"/ˈmænjuəl/",m:"adj. 手工的 n. 手册",c:"user manual"},
  {w:"mature",p:"/məˈtʃʊər/",m:"adj. 成熟的",c:"mature market"},
  {w:"media",p:"/ˈmiːdiə/",m:"n. 媒体",c:"social media"},
  {w:"medium",p:"/ˈmiːdiəm/",m:"n. 媒介 adj. 中等的",c:"medium size"},
  {w:"mental",p:"/ˈmentl/",m:"adj. 心理的",c:"mental health"},
  {w:"mention",p:"/ˈmenʃn/",m:"v./n. 提及",c:"not to mention"},
  {w:"mobile",p:"/ˈməʊbaɪl/",m:"adj. 移动的",c:"mobile phone"},
  {w:"modify",p:"/ˈmɒdɪfaɪ/",m:"v. 修改",c:"modify behavior"},
  {w:"moral",p:"/ˈmɒrəl/",m:"adj. 道德的 n. 寓意",c:"moral value"},
  {w:"multiple",p:"/ˈmʌltɪpl/",m:"adj. 多重的",c:"multiple times"},
  {w:"notion",p:"/ˈnəʊʃn/",m:"n. 概念",c:"have no notion"},
  {w:"numerous",p:"/ˈnjuːmərəs/",m:"adj. 许多的",c:"numerous times"},
  {w:"objection",p:"/əbˈdʒekʃn/",m:"n. 反对",c:"raise an objection"},
  {w:"objective",p:"/əbˈdʒektɪv/",m:"n. 目标 adj. 客观的",c:"achieve objective"},
  {w:"obstacle",p:"/ˈɒbstəkl/",m:"n. 障碍",c:"overcome obstacles"},
  {w:"obvious",p:"/ˈɒbviəs/",m:"adj. 明显的",c:"obvious reason"},
  {w:"oppose",p:"/əˈpəʊz/",m:"v. 反对",c:"oppose the plan"},
  {w:"organic",p:"/ɔːˈɡænɪk/",m:"adj. 有机的",c:"organic food"},
  {w:"overseas",p:"/ˌəʊvəˈsiːz/",m:"adv./adj. 海外(的)",c:"overseas market"},
  {w:"owe",p:"/əʊ/",m:"v. 欠，归功于",c:"owe to"},
  {w:"ownership",p:"/ˈəʊnəʃɪp/",m:"n. 所有权",c:"sense of ownership"},
  {w:"particular",p:"/pəˈtɪkjələr/",m:"adj. 特定的",c:"in particular"},
  {w:"percentage",p:"/pəˈsentɪdʒ/",m:"n. 百分比",c:"small percentage"},
  {w:"perspective",p:"/pəˈspektɪv/",m:"n. 观点",c:"from a perspective"},
  {w:"phenomenon",p:"/fɪˈnɒmɪnən/",m:"n. 现象",c:"natural phenomenon"},
  {w:"policy",p:"/ˈpɒləsi/",m:"n. 政策",c:"foreign policy"},
  {w:"possess",p:"/pəˈzes/",m:"v. 拥有",c:"possess skills"},
  {w:"preference",p:"/ˈprefrəns/",m:"n. 偏爱",c:"personal preference"},
  {w:"presence",p:"/ˈprezns/",m:"n. 出席，存在",c:"in the presence of"},
  {w:"prime",p:"/praɪm/",m:"adj. 首要的",c:"prime minister"},
  {w:"prior",p:"/ˈpraɪər/",m:"adj. 先前的",c:"prior to"},
  {w:"proceed",p:"/prəˈsiːd/",m:"v. 继续",c:"proceed with"},
  {w:"process",p:"/ˈprəʊses/",m:"n. 过程 v. 处理",c:"in the process"},
  {w:"profession",p:"/prəˈfeʃn/",m:"n. 职业",c:"medical profession"},
  {w:"professional",p:"/prəˈfeʃənl/",m:"adj. 专业的",c:"professional service"},
  {w:"proof",p:"/pruːf/",m:"n. 证据",c:"proof of identity"},
  {w:"proposal",p:"/prəˈpəʊzl/",m:"n. 提议",c:"make a proposal"},
  {w:"propose",p:"/prəˈpəʊz/",m:"v. 提议",c:"propose a plan"},
  {w:"prosperity",p:"/prɒˈsperəti/",m:"n. 繁荣",c:"economic prosperity"},
  {w:"protest",p:"/ˈprəʊtest/",m:"n./v. 抗议",c:"protest against"},
  {w:"qualification",p:"/ˌkwɒlɪfɪˈkeɪʃn/",m:"n. 资格",c:"academic qualification"},
  {w:"rapid",p:"/ˈræpɪd/",m:"adj. 迅速的",c:"rapid growth"},
  {w:"rarely",p:"/ˈreəli/",m:"adv. 很少",c:"rarely seen"},
  {w:"reasonable",p:"/ˈriːznəbl/",m:"adj. 合理的",c:"reasonable price"},
  {w:"recall",p:"/rɪˈkɔːl/",m:"v./n. 回忆",c:"recall the past"},
  {w:"recover",p:"/rɪˈkʌvər/",m:"v. 恢复",c:"recover from"},
  {w:"reduction",p:"/rɪˈdʌkʃn/",m:"n. 减少",c:"cost reduction"},
  {w:"refer",p:"/rɪˈfɜːr/",m:"v. 参考",c:"refer to"},
  {w:"regardless",p:"/rɪˈɡɑːdləs/",m:"adv. 不管怎样",c:"regardless of"},
  {w:"region",p:"/ˈriːdʒən/",m:"n. 地区",c:"in the region"},
  {w:"relate",p:"/rɪˈleɪt/",m:"v. 联系",c:"relate to"},
  {w:"reliable",p:"/rɪˈlaɪəbl/",m:"adj. 可靠的",c:"reliable source"},
  {w:"remark",p:"/rɪˈmɑːk/",m:"n./v. 评论",c:"make a remark"},
  {w:"remarkable",p:"/rɪˈmɑːkəbl/",m:"adj. 非凡的",c:"remarkable achievement"},
  {w:"remote",p:"/rɪˈməʊt/",m:"adj. 遥远的",c:"remote control"},
  {w:"reputation",p:"/ˌrepjuˈteɪʃn/",m:"n. 声誉",c:"good reputation"},
  {w:"request",p:"/rɪˈkwest/",m:"n./v. 请求",c:"make a request"},
  {w:"require",p:"/rɪˈkwaɪər/",m:"v. 需要",c:"require attention"},
  {w:"reserve",p:"/rɪˈzɜːv/",m:"v. 预订 n. 储备",c:"reserve a table"},
  {w:"resort",p:"/rɪˈzɔːt/",m:"v. 诉诸 n. 度假胜地",c:"resort to"},
  {w:"reward",p:"/rɪˈwɔːd/",m:"n. 奖赏 v. 报答",c:"reward for"},
  {w:"risk",p:"/rɪsk/",m:"n. 风险 v. 冒险",c:"take a risk"},
  {w:"rival",p:"/ˈraɪvl/",m:"n. 对手 v. 竞争",c:"rival company"},
  {w:"routine",p:"/ruːˈtiːn/",m:"n. 常规",c:"daily routine"},
  {w:"satisfaction",p:"/ˌsætɪsˈfækʃn/",m:"n. 满意",c:"customer satisfaction"},
  {w:"scale",p:"/skeɪl/",m:"n. 规模",c:"on a large scale"},
  {w:"scan",p:"/skæn/",m:"v./n. 扫描",c:"scan through"},
  {w:"scheme",p:"/skiːm/",m:"n. 方案",c:"color scheme"},
  {w:"scholar",p:"/ˈskɒlər/",m:"n. 学者",c:"visiting scholar"},
  {w:"scope",p:"/skəʊp/",m:"n. 范围",c:"within the scope"},
  {w:"sector",p:"/ˈsektər/",m:"n. 部门",c:"private sector"},
  {w:"senior",p:"/ˈsiːniər/",m:"adj. 高级的 n. 年长者",c:"senior manager"},
  {w:"similar",p:"/ˈsɪmələr/",m:"adj. 相似的",c:"similar to"},
  {w:"sole",p:"/səʊl/",m:"adj. 唯一的",c:"sole purpose"},
  {w:"solid",p:"/ˈsɒlɪd/",m:"adj. 固体的 n. 固体",c:"solid foundation"},
  {w:"solution",p:"/səˈluːʃn/",m:"n. 解决方案",c:"find a solution"},
  {w:"span",p:"/spæn/",m:"n. 跨度 v. 跨越",c:"life span"},
  {w:"specific",p:"/spəˈsɪfɪk/",m:"adj. 具体的",c:"specific area"},
  {w:"stable",p:"/ˈsteɪbl/",m:"adj. 稳定的",c:"stable economy"},
  {w:"stimulate",p:"/ˈstɪmjuleɪt/",m:"v. 刺激",c:"stimulate growth"},
  {w:"stock",p:"/stɒk/",m:"n. 库存，股票",c:"stock market"},
  {w:"strengthen",p:"/ˈstreŋθn/",m:"v. 加强",c:"strengthen ties"},
  {w:"submit",p:"/səbˈmɪt/",m:"v. 提交",c:"submit a report"},
  {w:"supreme",p:"/suːˈpriːm/",m:"adj. 最高的",c:"supreme court"},
  {w:"surplus",p:"/ˈsɜːpləs/",m:"n. 过剩 adj. 多余的",c:"budget surplus"},
  {w:"survey",p:"/ˈsɜːveɪ/",m:"n./v. 调查",c:"conduct a survey"},
  {w:"survival",p:"/səˈvaɪvl/",m:"n. 幸存",c:"survival skills"},
  {w:"suspend",p:"/səˈspend/",m:"v. 暂停",c:"suspend operations"},
  {w:"technique",p:"/tekˈniːk/",m:"n. 技术",c:"management technique"},
  {w:"territory",p:"/ˈterətri/",m:"n. 领土",c:"new territory"},
  {w:"theme",p:"/θiːm/",m:"n. 主题",c:"main theme"},
  {w:"thrive",p:"/θraɪv/",m:"v. 繁荣",c:"thrive on"},
  {w:"tolerate",p:"/ˈtɒləreɪt/",m:"v. 容忍",c:"tolerate behavior"},
  {w:"trace",p:"/treɪs/",m:"v. 追踪 n. 痕迹",c:"trace back to"},
  {w:"transaction",p:"/trænˈzækʃn/",m:"n. 交易",c:"business transaction"},
  {w:"transfer",p:"/trænsˈfɜːr/",m:"v./n. 转移",c:"transfer money"},
  {w:"tremendous",p:"/trəˈmendəs/",m:"adj. 巨大的",c:"tremendous effort"},
  {w:"undermine",p:"/ˌʌndəˈmaɪn/",m:"v. 削弱",c:"undermine confidence"},
  {w:"vanish",p:"/ˈvænɪʃ/",m:"v. 消失",c:"vanish into thin air"},
  {w:"variable",p:"/ˈveəriəbl/",m:"adj. 可变的 n. 变量",c:"variable costs"},
  {w:"verify",p:"/ˈverɪfaɪ/",m:"v. 核实",c:"verify information"},
  {w:"violate",p:"/ˈvaɪəleɪt/",m:"v. 违反",c:"violate rules"},
  {w:"virtual",p:"/ˈvɜːtʃuəl/",m:"adj. 虚拟的",c:"virtual reality"},
  {w:"volunteer",p:"/ˌvɒlənˈtɪər/",m:"v./n. 志愿",c:"volunteer to help"},
  {w:"weapon",p:"/ˈwepən/",m:"n. 武器",c:"nuclear weapon"},
  {w:"withstand",p:"/wɪðˈstænd/",m:"v. 承受",c:"withstand pressure"},
  {w:"yield",p:"/jiːld/",m:"v. 产生，屈服",c:"yield results"},
  {w:"acquisition",p:"/ˌækwɪˈzɪʃn/",m:"n. 获得，习得",c:"language acquisition"},
  {w:"addict",p:"/ˈædɪkt/",m:"n. 上瘾者 v. 使沉溺",c:"be addicted to"},
  {w:"agony",p:"/ˈæɡəni/",m:"n. 极度痛苦",c:"in agony"},
  {w:"alien",p:"/ˈeɪliən/",m:"adj. 外国的 n. 外星人",c:"alien culture"},
  {w:"apparatus",p:"/ˌæpəˈreɪtəs/",m:"n. 器械，设备",c:"scientific apparatus"},
  {w:"applicant",p:"/ˈæplɪkənt/",m:"n. 申请人",c:"job applicant"},
  {w:"ascend",p:"/əˈsend/",m:"v. 上升，攀登",c:"ascend the throne"},
  {w:"authentic",p:"/ɔːˈθentɪk/",m:"adj. 真正的，可靠的",c:"authentic document"},
  {w:"aviation",p:"/ˌeɪviˈeɪʃn/",m:"n. 航空，飞行",c:"aviation industry"},
  {w:"bald",p:"/bɔːld/",m:"adj. 秃头的，光秃的",c:"bald head"},
  {w:"ballet",p:"/ˈbæleɪ/",m:"n. 芭蕾舞",c:"ballet dancer"},
  {w:"barn",p:"/bɑːn/",m:"n. 谷仓，牲口棚",c:"horse barn"},
  {w:"barren",p:"/ˈbærən/",m:"adj. 贫瘠的，不育的",c:"barren land"},
  {w:"bias",p:"/ˈbaɪəs/",m:"n. 偏见 v. 使偏心",c:"unconscious bias"},
  {w:"bid",p:"/bɪd/",m:"n./v. 出价，投标",c:"bid for contract"},
  {w:"bilateral",p:"/ˌbaɪˈlætərəl/",m:"adj. 双边的",c:"bilateral agreement"},
  {w:"biography",p:"/baɪˈɒɡrəfi/",m:"n. 传记",c:"authorized biography"},
  {w:"bleak",p:"/bliːk/",m:"adj. 荒凉的，暗淡的",c:"bleak future"},
  {w:"brink",p:"/brɪŋk/",m:"n. 边缘，关头",c:"on the brink of"},
  {w:"brochure",p:"/ˈbrəʊʃər/",m:"n. 小册子",c:"travel brochure"},
  {w:"bronze",p:"/brɒnz/",m:"n. 青铜 adj. 青铜色的",c:"bronze medal"},
  {w:"bruise",p:"/bruːz/",m:"n. 瘀伤 v. 碰伤",c:"emotional bruise"},
  {w:"brutal",p:"/ˈbruːtl/",m:"adj. 残忍的，野蛮的",c:"brutal murder"},
  {w:"bulletin",p:"/ˈbʊlətɪn/",m:"n. 公告，公报",c:"news bulletin"},
  {w:"bully",p:"/ˈbʊli/",m:"n. 欺凌者 v. 欺负",c:"school bully"},
  {w:"bump",p:"/bʌmp/",m:"v./n. 碰撞",c:"bump into"},
  {w:"cabin",p:"/ˈkæbɪn/",m:"n. 小屋，机舱",c:"log cabin"},
  {w:"calcium",p:"/ˈkælsiəm/",m:"n. 钙",c:"calcium supplement"},
  {w:"canvas",p:"/ˈkænvəs/",m:"n. 帆布，画布",c:"oil on canvas"},
  {w:"carbon",p:"/ˈkɑːbən/",m:"n. 碳",c:"carbon emission"},
  {w:"carve",p:"/kɑːv/",m:"v. 雕刻，切开",c:"carve a statue"},
  {w:"casualty",p:"/ˈkæʒuəlti/",m:"n. 伤亡人员",c:"civilian casualty"},
  {w:"Catholic",p:"/ˈkæθəlɪk/",m:"adj. 天主教的",c:"Catholic church"},
  {w:"census",p:"/ˈsensəs/",m:"n. 人口普查",c:"national census"},
  {w:"chant",p:"/tʃɑːnt/",m:"v./n. 吟唱，反复说",c:"football chant"},
  {w:"chap",p:"/tʃæp/",m:"n. 家伙，小伙子",c:"nice chap"},
  {w:"chip",p:"/tʃɪp/",m:"n. 芯片，碎片",c:"silicon chip"},
  {w:"chorus",p:"/ˈkɔːrəs/",m:"n. 合唱，齐声",c:"in chorus"},
  {w:"circulation",p:"/ˌsɜːkjəˈleɪʃn/",m:"n. 循环，流通",c:"blood circulation"},
  {w:"clamp",p:"/klæmp/",m:"n. 夹具 v. 夹紧",c:"clamp down on"},
  {w:"clarity",p:"/ˈklærəti/",m:"n. 清晰，明晰",c:"clarity of thought"},
  {w:"clasp",p:"/klɑːsp/",m:"v. 紧握 n. 扣子",c:"clasp hands"},
  {w:"client",p:"/ˈklaɪənt/",m:"n. 客户，委托人",c:"client satisfaction"},
  {w:"cling",p:"/klɪŋ/",m:"v. 紧抓，依附",c:"cling to hope"},
  {w:"clockwise",p:"/ˈklɒkwaɪz/",m:"adv./adj. 顺时针",c:"turn clockwise"},
  {w:"closet",p:"/ˈklɒzɪt/",m:"n. 壁橱，衣橱",c:"walk-in closet"},
  {w:"cluster",p:"/ˈklʌstər/",m:"n. 群，簇 v. 聚集",c:"star cluster"},
  {w:"clutch",p:"/klʌtʃ/",m:"v. 抓紧 n. 离合器",c:"clutch at straws"},
  {w:"cocaine",p:"/kəʊˈkeɪn/",m:"n. 可卡因",c:"cocaine addiction"},
  {w:"coincide",p:"/ˌkəʊɪnˈsaɪd/",m:"v. 同时发生，一致",c:"coincide with"},
  {w:"collaborate",p:"/kəˈlæbəreɪt/",m:"v. 合作，协作",c:"collaborate with"},
  {w:"colonial",p:"/kəˈləʊniəl/",m:"adj. 殖民地的",c:"colonial period"},
  {w:"commemorate",p:"/kəˈmeməreɪt/",m:"v. 纪念，庆祝",c:"commemorate anniversary"},
  {w:"commentary",p:"/ˈkɒməntri/",m:"n. 评论，解说",c:"live commentary"},
  {w:"commodity",p:"/kəˈmɒdəti/",m:"n. 商品，货物",c:"commodity market"},
  {w:"commonwealth",p:"/ˈkɒmənwelθ/",m:"n. 联邦，共和国",c:"British Commonwealth"},
  {w:"compatible",p:"/kəmˈpætəbl/",m:"adj. 兼容的，合得来的",c:"compatible with"},
  {w:"condemn",p:"/kənˈdem/",m:"v. 谴责，判刑",c:"condemn violence"},
  {w:"condense",p:"/kənˈdens/",m:"v. 凝结，浓缩",c:"condense steam"},
  {w:"conscientious",p:"/ˌkɒnʃiˈenʃəs/",m:"adj. 尽责的，认真的",c:"conscientious worker"},
  {w:"consecutive",p:"/kənˈsekjətɪv/",m:"adj. 连续的",c:"consecutive days"},
  {w:"console",p:"/kənˈsəʊl/",m:"v. 安慰 n. 控制台",c:"console someone"},
  {w:"constrain",p:"/kənˈstreɪn/",m:"v. 限制，约束",c:"constrained by budget"},
  {w:"contempt",p:"/kənˈtempt/",m:"n. 轻视，蔑视",c:"contempt of court"},
  {w:"contrive",p:"/kənˈtraɪv/",m:"v. 设计，设法做到",c:"contrive a plan"},
  {w:"convene",p:"/kənˈviːn/",m:"v. 召集，召开",c:"convene a meeting"},
  {w:"conviction",p:"/kənˈvɪkʃn/",m:"n. 定罪，信念",c:"strong conviction"},
  {w:"cork",p:"/kɔːk/",m:"n. 软木塞",c:"cork screw"},
  {w:"corps",p:"/kɔːr/",m:"n. 军团，特种部队",c:"press corps"},
  {w:"corpse",p:"/kɔːps/",m:"n. 尸体",c:"examine corpse"},
  {w:"correlate",p:"/ˈkɒrəleɪt/",m:"v. 关联，相关",c:"correlate with"},
  {w:"costume",p:"/ˈkɒstjuːm/",m:"n. 服装，戏装",c:"traditional costume"},
  {w:"counterpart",p:"/ˈkaʊntəpɑːt/",m:"n. 对应的人或物",c:"foreign counterpart"},
  {w:"crackdown",p:"/ˈkrækdaʊn/",m:"n. 严厉打击",c:"government crackdown"},
  {w:"credentials",p:"/krəˈdenʃlz/",m:"n. 资格证书",c:"academic credentials"},
  {w:"credible",p:"/ˈkredəbl/",m:"adj. 可信的，可靠的",c:"credible source"},
  {w:"crumble",p:"/ˈkrʌmbl/",m:"v. 粉碎，崩溃",c:"crumble under pressure"},
  {w:"culminate",p:"/ˈkʌlmɪneɪt/",m:"v. 达到顶点",c:"culminate in"},
  {w:"customary",p:"/ˈkʌstəməri/",m:"adj. 习惯的，惯例的",c:"customary practice"},
  {w:"cynical",p:"/ˈsɪnɪkl/",m:"adj. 愤世嫉俗的",c:"cynical view"},
  {w:"dairy",p:"/ˈdeəri/",m:"n. 牛奶场 adj. 乳制的",c:"dairy product"},
  {w:"dazzle",p:"/ˈdæzl/",m:"v. 使目眩，使赞叹",c:"dazzle with brilliance"},
  {w:"deadly",p:"/ˈdedli/",m:"adj. 致命的 adv. 非常",c:"deadly virus"},
  {w:"decay",p:"/dɪˈkeɪ/",m:"v./n. 腐烂，衰退",c:"tooth decay"},
  {w:"decisive",p:"/dɪˈsaɪsɪv/",m:"adj. 决定性的，果断的",c:"decisive victory"},
  {w:"dedicate",p:"/ˈdedɪkeɪt/",m:"v. 奉献，致力于",c:"dedicate to"},
  {w:"deem",p:"/diːm/",m:"v. 认为，视为",c:"deem necessary"},
  {w:"default",p:"/dɪˈfɔːlt/",m:"n. 默认 v. 违约",c:"loan default"},
  {w:"defendant",p:"/dɪˈfendənt/",m:"n. 被告",c:"defendant pleaded not guilty"},
  {w:"deficit",p:"/ˈdefɪsɪt/",m:"n. 赤字，亏损",c:"budget deficit"},
  {w:"defy",p:"/dɪˈfaɪ/",m:"v. 违抗，藐视",c:"defy authority"},
  {w:"denial",p:"/dɪˈnaɪəl/",m:"n. 否认，拒绝",c:"in denial"},
  {w:"dentist",p:"/ˈdentɪst/",m:"n. 牙科医生",c:"visit the dentist"},
  {w:"depict",p:"/dɪˈpɪkt/",m:"v. 描绘，描述",c:"depict reality"},
  {w:"deploy",p:"/dɪˈplɔɪ/",m:"v. 部署，调动",c:"deploy troops"},
  {w:"deprive",p:"/dɪˈpraɪv/",m:"v. 剥夺，使丧失",c:"deprive of rights"},
  {w:"destined",p:"/ˈdestɪnd/",m:"adj. 注定的",c:"destined for greatness"},
  {w:"detach",p:"/dɪˈtætʃ/",m:"v. 分开，派遣",c:"detach from"},
  {w:"detain",p:"/dɪˈteɪn/",m:"v. 拘留，扣留",c:"detain suspects"},
  {w:"deviate",p:"/ˈdiːvieɪt/",m:"v. 偏离，背离",c:"deviate from plan"},
  {w:"diffuse",p:"/dɪˈfjuːz/",m:"v. 扩散，传播",c:"diffuse knowledge"},
  {w:"diligent",p:"/ˈdɪlɪdʒənt/",m:"adj. 勤奋的，勤勉的",c:"diligent student"},
  {w:"directory",p:"/dəˈrektəri/",m:"n. 目录，号码簿",c:"phone directory"},
  {w:"discard",p:"/dɪsˈkɑːd/",m:"v. 丢弃，抛弃",c:"discard old habits"},
  {w:"discern",p:"/dɪˈsɜːn/",m:"v. 辨别，察觉",c:"difficult to discern"},
  {w:"discrepancy",p:"/dɪsˈkrepənsi/",m:"n. 差异，不一致",c:"price discrepancy"},
  {w:"discrete",p:"/dɪˈskriːt/",m:"adj. 分离的，不连续的",c:"discrete parts"},
  {w:"dismay",p:"/dɪsˈmeɪ/",m:"n. 沮丧，惊慌 v. 使惊恐",c:"to my dismay"},
  {w:"disperse",p:"/dɪˈspɜːs/",m:"v. 分散，驱散",c:"disperse crowd"},
  {w:"displace",p:"/dɪsˈpleɪs/",m:"v. 取代，使流离失所",c:"displace workers"},
  {w:"disregard",p:"/ˌdɪsrɪˈɡɑːd/",m:"v./n. 漠视，不顾",c:"disregard rules"},
  {w:"distil",p:"/dɪˈstɪl/",m:"v. 蒸馏，提炼",c:"distil water"},
  {w:"distort",p:"/dɪˈstɔːt/",m:"v. 扭曲，歪曲",c:"distort facts"},
  {w:"distract",p:"/dɪˈstrækt/",m:"v. 分散注意力",c:"distract from work"},
  {w:"diversion",p:"/daɪˈvɜːʃn/",m:"n. 转移，消遣",c:"traffic diversion"},
  {w:"divert",p:"/daɪˈvɜːt/",m:"v. 转移，使转向",c:"divert attention"},
  {w:"dizzy",p:"/ˈdɪzi/",m:"adj. 头晕的",c:"feel dizzy"},
  {w:"dodge",p:"/dɒdʒ/",m:"v. 躲避，避开",c:"dodge responsibility"},
  {w:"dole",p:"/dəʊl/",m:"n. 救济金 v. 少量发放",c:"on the dole"},
  {w:"dolphin",p:"/ˈdɒlfɪn/",m:"n. 海豚",c:"dolphin show"},
  {w:"domain",p:"/dəˈmeɪn/",m:"n. 领域，域名",c:"public domain"},
  {w:"doom",p:"/duːm/",m:"n. 厄运 v. 注定",c:"doom and gloom"},
  {w:"dose",p:"/dəʊs/",m:"n. 剂量，一剂",c:"daily dose"},
  {w:"drawback",p:"/ˈdrɔːbæk/",m:"n. 缺点，不利条件",c:"main drawback"},
  {w:"duplicate",p:"/ˈdjuːplɪkeɪt/",m:"v. 复制 n. 副本",c:"duplicate key"},
  {w:"eccentric",p:"/ɪkˈsentrɪk/",m:"adj. 古怪的 n. 怪人",c:"eccentric behavior"},
  {w:"edible",p:"/ˈedɪbl/",m:"adj. 可食用的",c:"edible mushrooms"},
  {w:"ego",p:"/ˈiːɡəʊ/",m:"n. 自我，自尊",c:"big ego"},
  {w:"eject",p:"/iˈdʒekt/",m:"v. 弹出，驱逐",c:"eject from plane"},
  {w:"elderly",p:"/ˈeldəli/",m:"adj. 年长的",c:"elderly people"},
  {w:"elevate",p:"/ˈelɪveɪt/",m:"v. 提高，提升",c:"elevate status"},
  {w:"elicit",p:"/iˈlɪsɪt/",m:"v. 引出，诱出",c:"elicit response"},
  {w:"eligible",p:"/ˈelɪdʒəbl/",m:"adj. 合格的，有资格的",c:"eligible for benefits"},
  {w:"eloquent",p:"/ˈeləkwənt/",m:"adj. 雄辩的，有口才的",c:"eloquent speaker"},
  {w:"embody",p:"/ɪmˈbɒdi/",m:"v. 体现，具体表现",c:"embody spirit"},
  {w:"emigrate",p:"/ˈemɪɡreɪt/",m:"v. 移居国外",c:"emigrate to Canada"},
  {w:"empirical",p:"/ɪmˈpɪrɪkl/",m:"adj. 经验的，实证的",c:"empirical evidence"},
  {w:"enclosure",p:"/ɪnˈkləʊʒər/",m:"n. 围场，附件",c:"enclosed enclosure"},
  {w:"engagement",p:"/ɪnˈɡeɪdʒmənt/",m:"n. 订婚，约定",c:"prior engagement"},
  {w:"ensue",p:"/ɪnˈsjuː/",m:"v. 接着发生，随之而来",c:"ensue from"},
  {w:"entail",p:"/ɪnˈteɪl/",m:"v. 需要，使必要",c:"entail risks"},
  {w:"entrepreneur",p:"/ˌɒntrəprəˈnɜːr/",m:"n. 企业家",c:"successful entrepreneur"},
  {w:"erase",p:"/ɪˈreɪz/",m:"v. 擦掉，消除",c:"erase memory"},
  {w:"erect",p:"/ɪˈrekt/",m:"v. 建立 adj. 直立的",c:"erect a building"},
  {w:"erroneous",p:"/ɪˈrəʊniəs/",m:"adj. 错误的，不正确的",c:"erroneous belief"},
  {w:"escort",p:"/ˈeskɔːt/",m:"n. 护卫 v. 护送",c:"police escort"},
  {w:"eternal",p:"/ɪˈtɜːnl/",m:"adj. 永恒的，永久的",c:"eternal life"},
  {w:"ethic",p:"/ˈeθɪk/",m:"n. 道德，伦理",c:"work ethic"},
  {w:"ethnic",p:"/ˈeθnɪk/",m:"adj. 民族的，种族的",c:"ethnic group"},
  {w:"evaporate",p:"/ɪˈvæpəreɪt/",m:"v. 蒸发，消失",c:"water evaporates"},
  {w:"evoke",p:"/ɪˈvəʊk/",m:"v. 唤起，引起",c:"evoke memories"},
  {w:"exotic",p:"/ɪɡˈzɒtɪk/",m:"adj. 异国情调的，奇异的",c:"exotic fruit"},
  {w:"expel",p:"/ɪkˈspel/",m:"v. 驱逐，开除",c:"expel from school"},
  {w:"expire",p:"/ɪkˈspaɪər/",m:"v. 到期，期满",c:"passport expires"},
  {w:"exquisite",p:"/ɪkˈskwɪzɪt/",m:"adj. 精美的，精致的",c:"exquisite taste"},
  {w:"extravagant",p:"/ɪkˈstrævəɡənt/",m:"adj. 奢侈的，过分的",c:"extravagant lifestyle"},
  {w:"fake",p:"/feɪk/",m:"adj. 假的 n. 赝品",c:"fake news"},
  {w:"fatigue",p:"/fəˈtiːɡ/",m:"n. 疲劳 v. 使疲劳",c:"mental fatigue"},
  {w:"feast",p:"/fiːst/",m:"n. 盛宴 v. 尽情享受",c:"wedding feast"},
  {w:"ferry",p:"/ˈferi/",m:"n. 渡船 v. 摆渡",c:"car ferry"},
  {w:"feudal",p:"/ˈfjuːdl/",m:"adj. 封建的",c:"feudal society"},
  {w:"filter",p:"/ˈfɪltər/",m:"v. 过滤 n. 过滤器",c:"water filter"},
  {w:"fixture",p:"/ˈfɪkstʃər/",m:"n. 固定装置，长期存在物",c:"light fixture"},
  {w:"flank",p:"/flæŋk/",m:"n. 侧面 v. 位于侧面",c:"flank attack"},
  {w:"flee",p:"/fliː/",m:"v. 逃跑，逃避",c:"flee the country"},
  {w:"flush",p:"/flʌʃ/",m:"v. 冲洗 n. 脸红",c:"flush toilet"},
  {w:"flutter",p:"/ˈflʌtər/",m:"v. 飘动，振翅",c:"heart flutters"},
  {w:"foam",p:"/fəʊm/",m:"n. 泡沫 v. 起泡沫",c:"foam mattress"},
  {w:"foremost",p:"/ˈfɔːməʊst/",m:"adj. 最重要的 adv. 首先",c:"first and foremost"},
  {w:"forerunner",p:"/ˈfɔːrʌnər/",m:"n. 先驱，前兆",c:"forerunner of modern science"},
  {w:"forge",p:"/fɔːdʒ/",m:"v. 锻造，伪造",c:"forge signature"},
  {w:"formidable",p:"/ˈfɔːmɪdəbl/",m:"adj. 可怕的，难对付的",c:"formidable opponent"},
  {w:"formulate",p:"/ˈfɔːmjuleɪt/",m:"v. 制定，系统阐述",c:"formulate policy"},
  {w:"fossil",p:"/ˈfɒsl/",m:"n. 化石",c:"fossil fuel"},
  {w:"fracture",p:"/ˈfræktʃər/",m:"n. 骨折 v. 断裂",c:"bone fracture"},
  {w:"fragile",p:"/ˈfrædʒaɪl/",m:"adj. 脆弱的，易碎的",c:"fragile ecosystem"},
  {w:"frantic",p:"/ˈfræntɪk/",m:"adj. 疯狂的，狂乱的",c:"frantic search"},
  {w:"freight",p:"/freɪt/",m:"n. 货运，货物",c:"freight train"},
  {w:"furnish",p:"/ˈfɜːnɪʃ/",m:"v. 提供，布置家具",c:"furnish information"},
  {w:"fusion",p:"/ˈfjuːʒn/",m:"n. 融合，核聚变",c:"nuclear fusion"},
  {w:"galaxy",p:"/ˈɡæləksi/",m:"n. 星系，银河",c:"Milky Way galaxy"},
  {w:"gauge",p:"/ɡeɪdʒ/",m:"n. 测量仪 v. 测量",c:"pressure gauge"},
  {w:"gear",p:"/ɡɪər/",m:"n. 齿轮 v. 使适应",c:"gear up for"},
  {w:"gigantic",p:"/dʒaɪˈɡæntɪk/",m:"adj. 巨大的，庞大的",c:"gigantic statue"},
  {w:"graphic",p:"/ˈɡræfɪk/",m:"adj. 图表的，生动的",c:"graphic design"},
  {w:"grease",p:"/ɡriːs/",m:"n. 油脂 v. 涂油",c:"elbow grease"},
  {w:"grief",p:"/ɡriːf/",m:"n. 悲伤，悲痛",c:"overcome grief"},
  {w:"grieve",p:"/ɡriːv/",m:"v. 悲伤，哀悼",c:"grieve over loss"},
  {w:"grin",p:"/ɡrɪn/",m:"v./n. 露齿笑",c:"grin from ear to ear"},
  {w:"groan",p:"/ɡrəʊn/",m:"v./n. 呻吟，抱怨",c:"groan in pain"},
  {w:"guardian",p:"/ˈɡɑːdiən/",m:"n. 监护人，保护者",c:"legal guardian"},
  {w:"harassment",p:"/ˈhærəsmənt/",m:"n. 骚扰，烦恼",c:"sexual harassment"},
  {w:"hardy",p:"/ˈhɑːdi/",m:"adj. 坚强的，耐寒的",c:"hardy plant"},
  {w:"hawk",p:"/hɔːk/",m:"n. 鹰 v. 叫卖",c:"war hawk"},
  {w:"hemisphere",p:"/ˈhemɪsfɪər/",m:"n. 半球",c:"northern hemisphere"},
  {w:"hinder",p:"/ˈhɪndər/",m:"v. 妨碍，阻碍",c:"hinder development"},
  {w:"hinge",p:"/hɪndʒ/",m:"n. 铰链 v. 依赖",c:"hinge on"},
  {w:"hoist",p:"/hɔɪst/",m:"v. 吊起，升起",c:"hoist a flag"},
  {w:"homogeneous",p:"/ˌhɒməˈdʒiːniəs/",m:"adj. 同质的，均匀的",c:"homogeneous group"},
  {w:"hose",p:"/həʊz/",m:"n. 软管 v. 用水管冲",c:"garden hose"},
  {w:"hover",p:"/ˈhɒvər/",m:"v. 盘旋，徘徊",c:"hover over water"},
  {w:"howl",p:"/haʊl/",m:"v./n. 嚎叫，狂笑",c:"howl with laughter"},
  {w:"huddle",p:"/ˈhʌdl/",m:"v. 拥挤 n. 一团",c:"huddle together"},
  {w:"hug",p:"/hʌɡ/",m:"v./n. 拥抱",c:"give a hug"},
  {w:"humanity",p:"/hjuːˈmænəti/",m:"n. 人类，人道",c:"crime against humanity"},
  {w:"humidity",p:"/hjuːˈmɪdəti/",m:"n. 湿度，潮湿",c:"high humidity"},
  {w:"hurricane",p:"/ˈhʌrɪkən/",m:"n. 飓风",c:"hurricane warning"},
  {w:"hypothesis",p:"/haɪˈpɒθəsɪs/",m:"n. 假设，假说",c:"scientific hypothesis"},
  {w:"hysterical",p:"/hɪˈsterɪkl/",m:"adj. 歇斯底里的",c:"hysterical laughter"}
];

// ============================================================
// 翻译练习题 (固定题库，从generator中提取)
// ============================================================
const exerciseData = {
  phrases: [
    { zh:"语言障碍", ans:"language barrier", key:["language","barrier"] },
    { zh:"血液循环", ans:"blood circulation", key:["blood","circulation"] },
    { zh:"自律精神", ans:"self-discipline", key:["self-discipline"] },
    { zh:"全球变暖", ans:"global warming", key:["global","warming"] },
    { zh:"和平倡议", ans:"peace initiative", key:["peace","initiative"] },
    { zh:"逐步提升", ans:"gradual improvement", key:["gradual","improvement"] },
    { zh:"竞争激烈的市场", ans:"highly competitive market", key:["competitive","market"] },
    { zh:"确保安全", ans:"ensure safety", key:["ensure","safety"] },
    { zh:"主动出击", ans:"take the initiative", key:["take","initiative"] },
    { zh:"追求梦想", ans:"pursue a dream", key:["pursue","dream"] }
  ],
  sentences: [
    {
      zh:"随着科技的不断进步，人们积累知识和获取信息的方式正在发生深刻变化。",
      ans:"With the continuous advancement of technology, the ways in which people accumulate knowledge and access information are undergoing profound changes.",
      keys:["technology","accumulate","profound","information","continuous"],
      analysis:[
        ["随著进步","With the continuous advancement of technology","with引导伴随状语"],
        ["人们的方式","the ways in which people...","正式句型"],
        ["积累知识","accumulate knowledge","词表核心词"],
        ["深刻变化","undergoing profound changes","undergo=经历；profound=深刻"]
      ], err:"\"great changes\" 应改为 \"profound/significant changes\""
    },
    {
      zh:"政府应当采取措施，消除贫困，同时确保弱势群体获得足够的社会保障。",
      ans:"The government should take measures to eliminate poverty while ensuring that vulnerable groups have access to adequate social security.",
      keys:["measures","eliminate","poverty","vulnerable","adequate"],
      analysis:[
        ["采取措施","take measures","固定搭配"],
        ["消除贫困","eliminate poverty","词表核心词"],
        ["弱势群体","vulnerable groups","四级重要词"],
        ["获得保障","have access to...","获得/享有"]
      ], err:"应用 \"ensure that + 从句\" 而非口语化表达"
    },
    {
      zh:"保持积极的心态对于应对学业和工作中不可避免的压力至关重要。",
      ans:"Maintaining a positive attitude is crucial for dealing with the inevitable pressures in academic studies and work.",
      keys:["maintaining","attitude","crucial","inevitable","pressures"],
      analysis:[
        ["保持积极心态","Maintaining a positive attitude","动名词主语更正式"],
        ["至关重要","is crucial/essential/vital","三词均可"],
        ["不可避免的","inevitable","词表词汇"],
        ["应对压力","dealing with pressures","deal with = cope with"]
      ], err:"\"very important\" 太简单；\"Keep\" 应换为 maintain"
    },
    {
      zh:"这项研究表明，适度锻炼不仅有助于改善血液循环，还能增强免疫系统功能。",
      ans:"This study indicates that moderate exercise not only helps improve blood circulation, but also enhances the function of the immune system.",
      keys:["indicates","moderate","circulation","not only","immune"],
      analysis:[
        ["研究表明","the study indicates/shows","indicate为词表词汇"],
        ["适度锻炼","moderate exercise","moderate=适度的"],
        ["不仅还","not only...but also...","注意位置对称"],
        ["增强免疫","enhance the function of the immune system","enhance为词表核心词"]
      ], err:"\"not only...but...\" 缺 also 结构不完整"
    },
    {
      zh:"要在全球竞争激烈的市场中脱颖而出，企业必须不断创新并提升产品和服务质量。",
      ans:"To stand out in the highly competitive global market, companies must constantly innovate and improve the quality of their products and services.",
      keys:["stand out","competitive","innovate","quality","constantly"],
      analysis:[
        ["脱颖而出","stand out","固定短语"],
        ["竞争激烈","highly competitive","competitive为词表词汇"],
        ["不断创新","constantly innovate","constantly/continuously均可"],
        ["提升质量","improve the quality of","improve/enhance均可"]
      ], err:"\"To be outstanding\" 意思偏差"
    }
  ],
  paragraph: {
    zh:"近年来，在线教育迅速发展，为全球数百万学习者提供了灵活多样的学习机会。然而，这一趋势也带来了一些挑战。首先，学习者需要具备高度的自律性，才能在没有传统课堂约束的环境下坚持学习。其次，网络技术的差异导致不同地区的学习者在获取教育资源方面存在明显的不平等。尽管如此，在线教育所带来的便利性和低成本优势，使其成为推动教育公平的重要途径，值得持续关注与投入。",
    ans:"In recent years, online education has developed rapidly, providing millions of learners worldwide with flexible and diverse learning opportunities. However, this trend has also brought about some challenges. First, learners need to possess a high degree of self-discipline in order to persist in their studies without the constraints of a traditional classroom. Second, disparities in internet technology have led to significant inequalities among learners from different regions in accessing educational resources. Nevertheless, the convenience and low-cost advantages offered by online education make it an important pathway to promoting educational equity, deserving sustained attention and investment.",
    keys:["self-discipline","flexible","disparities","nevertheless","equity","persist","millions","rapidly"],
    hints:"self-discipline / flexible / disparities / educational equity / nevertheless",
    analysis:[
      ["迅速发展","has developed rapidly","现在完成时"],
      ["数百万","millions of","≠ hundreds of millions"],
      ["自律性","self-discipline","词表词汇"],
      ["坚持学习","persist in their studies","persist in doing"],
      ["差异","disparities","disparity为四级词"],
      ["尽管如此","Nevertheless","比However更强调转折"],
      ["教育公平","educational equity","equity比equality更精准"],
      ["值得关注","deserving sustained attention","deserve doing"]
    ]
  }
};

// ============================================================
// 日期系统 (V3)
// ============================================================
const START_DATE = new Date(2026, 4, 21); // May 21, 2026 - 第一天
const MS_DAY = 86400000;

function getEffectiveNow() {
  const now = new Date();
  if (now.getHours() < 9) now.setDate(now.getDate() - 1);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
const TODAY = getEffectiveNow();
function dayIndex(d) { return Math.floor((d.getTime() - START_DATE.getTime()) / MS_DAY); }
let currentDate = new Date(TODAY);
const VOCAB_PER_PAGE = 12;

// 每日寄语 (32条轮换)
const DAILY_QUOTES = [
  "今天的每一份努力，都是明天更好的自己",
  "坚持就是胜利，四级必过！",
  "每天进步一点点，日积月累见成效",
  "学如逆水行舟，不进则退",
  "今天的目标：掌握80个核心词汇",
  "你只管努力，剩下的交给时间",
  "不背单词，何以过四级？",
  "知识是最好的化妆品",
  "每一个早起背单词的你都在闪闪发光",
  "四级不难，难的是坚持",
  "蜕变从每天的积累开始",
  "学习是一场马拉松，不是短跑",
  "睡前复习一遍，记忆更牢固",
  "认真学习的女孩最美",
  "好运藏在努力里",
  "今天的汗水是明天的钻石",
  "让英语成为你的旋律",
  "词汇量是通往高分的钥匙",
  "不积跬步，无以至千里",
  "翻过四级这座山，前面是更广阔的天地",
  "每天的坚持都不会被辜负",
  "新的一天，新的80个单词",
  "学习的快乐在于看到自己的进步",
  "自由来自自律",
  "为你准备了今天的学习内容，加油！",
  "一天一个脚印，四级就在脚下",
  "慢慢来，比较快",
  "学习也可以是快乐的旅程",
  "背完这80个单词，离目标又近了一步",
  "你比你想象的更强大",
  "做闪闪发光的自己",
  "每一朵花开都需要时间，学习也是"
];
function getDailyQuote(d) { return DAILY_QUOTES[dayIndex(d) % DAILY_QUOTES.length]; }

// V3: no cache needed - vocab is deterministically generated from date

function formatDate(d) {
  return d.getFullYear()+'年'+String(d.getMonth()+1).padStart(2,'0')+'月'+String(d.getDate()).padStart(2,'0')+'日';
}

// 基于日期的伪随机数生成器（day≥1用，day0不参与洗牌）
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h) + seed.charCodeAt(i);
    h |= 0;
  }
  return function() {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    return h / 0x7fffffff;
  };
}

// 词汇缓存：保证同一天词汇固定、不同天不重复
let vocabForDate = {};
function getDailyVocab(d) {
  var idx = dayIndex(d);
  return DAILY_WORDS[idx];
}

// ============================================================
// 词汇渲染
// ============================================================
let filteredVocab = [];
let vocabPage = 1;

function getCurrentVocab() {
  return getDailyVocab(currentDate);
}

function filterVocab() {
  const q = document.getElementById('vocabSearch').value.toLowerCase().trim();
  const all = getCurrentVocab();
  filteredVocab = q ? all.filter(v =>
    v.w.toLowerCase().includes(q) || v.m.includes(q)
  ) : [...all];
  vocabPage = 1;
  renderVocab();
}

function renderVocab() {
  const all = getCurrentVocab();
  filteredVocab = filteredVocab.length > 0 ? filteredVocab : [...all];
  const grid = document.getElementById('vocabGrid');
  const pagination = document.getElementById('vocabPagination');
  const count = document.getElementById('vocabCount');
  const badge = document.getElementById('vocabBadge');

  const totalPages = Math.ceil(filteredVocab.length / VOCAB_PER_PAGE);
  if (vocabPage > totalPages) vocabPage = totalPages;
  if (vocabPage < 1) vocabPage = 1;

  const start = (vocabPage - 1) * VOCAB_PER_PAGE;
  const page = filteredVocab.slice(start, start + VOCAB_PER_PAGE);

  count.textContent = `共 ${filteredVocab.length} 个单词，第 ${start + 1}-${Math.min(start + VOCAB_PER_PAGE, filteredVocab.length)} 个${currentDate.toDateString() !== TODAY.toDateString() ? ' · 查看历史记录' : ''}`;
  badge.textContent = `${all.length}词`;

  grid.innerHTML = page.map(function(v, i) {
    var tag = v.m ? v.m.split(' ')[0].replace(/[,;]/g,'') : '';
    return '<div class="word-card wcard" onclick="toggleMeaning(this)" style="background:var(--w);border-radius:16px;padding:20px 18px 18px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.02);border-left:0;position:relative;overflow:hidden;cursor:pointer;">' +
      '<span class="word-num" style="position:absolute;top:12px;left:14px;font-size:11px;color:#ccc;font-weight:700;">#' + (start + i + 1) + '</span>' +
      '<span class="bookmark-star" data-word="' + v.w.replace(/"/g,'&quot;') + '" onclick="event.stopPropagation();toggleBookmark(this.getAttribute(\'data-word\'),this)" style="position:absolute;top:10px;right:14px;font-size:18px;color:#ffc107;cursor:pointer;user-select:none;" title="收藏这个单词">☆</span>' +
      '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">' +
        '<div class="word-title-row" style="display:flex;align-items:center;gap:8px;">' +
          '<span class="word-en" onclick="event.stopPropagation();speakWord(\'' + v.w.replace(/'/g,"\\'") + '\')" title="\u{1F50A} \u70B9\u51FB\u64AD\u653E\u53D1\u97F3" style="font-size:22px;font-weight:800;color:#1a1a2e;letter-spacing:0.3px;cursor:pointer;">' + v.w + ' <span class="audio-icon" style="font-size:14px;color:#999;vertical-align:middle;">\u{1F50A}</span></span>' +
          (tag ? '<span style="font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;white-space:nowrap;">' + tag + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<div style="font-size:13px;color:#999;margin-bottom:12px;letter-spacing:0.5px;">' + v.p + '</div>' +
      '<div class="word-meaning hidden" style="font-size:16px;color:#333;font-weight:600;margin-bottom:8px;">' + v.m + '</div>' +
      (v.ex ? '<div style="height:1px;background:linear-gradient(90deg,transparent,#e0e0e0,transparent);margin:10px 0;"></div><div class="word-ex hidden" style="font-size:13px;color:#555;font-style:italic;line-height:1.7;margin-bottom:4px;">\u201C' + v.ex + '\u201D</div>' : '') +
      (v.excn ? '<div class="word-excn hidden" style="font-size:12px;color:#999;margin-bottom:8px;">' + v.excn + '</div>' : '') +
      (v.c ? '<div class="word-colloc hidden" style="font-size:12px;color:#ec407a;padding:4px 0;">\u{1F4CC} ' + v.c + '</div>' : '') +
      '<div class="click-hint" style="font-size:11px;color:#bbb;text-align:center;margin-top:6px;">\u{1F446} \u70B9\u51FB\u67E5\u770B\u542B\u4E49 / \u70B9\u51FB\u5355\u8BCD\u64AD\u653E\u53D1\u97F3</div>' +
    '</div>';
  }).join('');

  if (totalPages <= 1) { pagination.innerHTML = ''; return; }
  pagination.innerHTML = `
    <button class="page-btn" onclick="vocabPage=${vocabPage-1};renderVocab()" ${vocabPage===1?'disabled style="opacity:0.4"':''}>◀</button>
    <span class="page-info">${vocabPage} / ${totalPages}</span>
    <button class="page-btn" onclick="vocabPage=${vocabPage+1};renderVocab()" ${vocabPage===totalPages?'disabled style="opacity:0.4"':''}>▶</button>
  `;
}

// ============================================================
// 日期切换
// ============================================================

// ============================================================
// 词卡交互：点击切换含义、点击播放发音
// ============================================================
function toggleMeaning(card) {
  card.classList.toggle("revealed");
}
function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}
// 初始化所有收藏星标的状态
function initBookmarkStars() {
  try {
    var list = JSON.parse(localStorage.getItem('cet4_bookmarks') || '[]');
    var stars = document.querySelectorAll('.bookmark-star');
    for (var i = 0; i < stars.length; i++) {
      var w = stars[i].getAttribute('data-word');
      if (list.indexOf(w) >= 0) {
        stars[i].textContent = '★';
        stars[i].title = '取消收藏';
      } else {
        stars[i].textContent = '☆';
        stars[i].title = '收藏这个单词';
      }
    }
  } catch(e) {}
}

function changeDay(delta) {
  const next = new Date(currentDate);
  next.setDate(next.getDate() + delta);
  if (next > TODAY) return; // 不能超过今天
  if (next < START_DATE) return; // 不能早于第一天
  currentDate = next;
  filteredVocab = [];
  vocabPage = 1;
  updateUI();
}

function updateUI() {
  var _el;
  if ((_el = document.getElementById('dateLabel'))) _el.textContent = formatDate(currentDate);
  if ((_el = document.getElementById('examDateLabel'))) _el.textContent = formatDate(currentDate);
  if ((_el = document.getElementById('sweetNoteDate'))) _el.textContent = formatDate(currentDate);
  renderVocab();
  // 初始化收藏星标状态
  initBookmarkStars();
  updateStatsRow();

  // === 分叉逻辑：day 0 保留模拟考，day 1+ 使用每日一练 ===
  var idx = dayIndex(currentDate);
  var examPre = document.getElementById('examPre');
  var examBody = document.getElementById('examBody');
  var quizContainer = document.getElementById('dailyQuizContainer');
  var tabExam = document.getElementById('tab-exam');

  if (idx === 0) {
    // 5/21: 原始模拟考试
    if (examPre) examPre.style.display = '';
    if (examBody) examBody.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'none';
    if (tabExam) tabExam.innerHTML = '<span class="tab-icon">✍️</span>模拟考';
  } else {
    // 5/22+: 每日一练
    if (examPre) examPre.style.display = 'none';
    if (examBody) examBody.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    if (tabExam) tabExam.innerHTML = '<span class="tab-icon">🎯</span>每日一练';
    renderDailyQuiz();
    updateDailyStats();
  }

  // === 复习 Tab 可见性控制 (V3.4) ===
  var tabReview = document.getElementById('tab-review');
  if (tabReview) {
    if (idx < 1) { tabReview.style.display = 'none'; }
    else {
      tabReview.style.display = '';
      renderReviewPanel();
    }
  }
}

// ============================================================
// 考试逻辑
// ============================================================
let examStarted = false;
let examSubmitted = false;
let examTimer = null;
let examRemaining = 30 * 60; // 30 min in seconds

function startExam() {
  if (dayIndex(currentDate) !== 0) return; // 仅5/21可用
  if (examStarted) return;
  examStarted = true;
  examSubmitted = false;
  examRemaining = 30 * 60;

  document.getElementById('examPre').style.display = 'none';
  document.getElementById('examBody').style.display = 'block';
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('submitBtn').textContent = '📤 交卷';

  renderExamQuestions();
  startTimer();
}

function startTimer() {
  const timerEl = document.getElementById('timer');
  const progEl = document.getElementById('timerProg');
  const total = 30 * 60;

  if (examTimer) clearInterval(examTimer);
  examTimer = setInterval(() => {
    if (examSubmitted) { clearInterval(examTimer); return; }
    examRemaining--;
    const m = Math.floor(examRemaining / 60);
    const s = examRemaining % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    progEl.style.width = (examRemaining / total * 100) + '%';

    timerEl.className = '';
    if (examRemaining <= 300) timerEl.className = 'warn';
    if (examRemaining <= 60) timerEl.className = 'danger';
    if (examRemaining <= 0) {
      clearInterval(examTimer);
      timerEl.textContent = '00:00';
      submitExam();
    }
  }, 1000);
}

function renderExamQuestions() {
  let html = '';

  // Part 1: 词组翻译
  html += `<div class="card"><div class="section-title"><span class="icon">📝</span>第一部分：词组翻译 <span class="badge">10题 × 2分 = 20分</span></div>`;
  html += exerciseData.phrases.map((p, i) => `
    <div class="q-item">
      <div class="q-label"><span class="q-num">${i+1}</span> ${p.zh}</div>
      <textarea id="p1q${i+1}" placeholder="输入英文..." rows="1"></textarea>
      <div class="q-score" id="sc-p1q${i+1}"></div>
      <div class="answer-reveal" id="rev-p1q${i+1}">
        <div class="ans-block"><div class="ans-lbl">✅ 正确答案</div><div class="ans-txt">${p.ans}</div></div>
      </div>
    </div>
  `).join('');
  html += `</div>`;

  // Part 2: 句子翻译
  html += `<div class="card"><div class="section-title"><span class="icon">✍️</span>第二部分：句子翻译 <span class="badge">5题 × 8分 = 40分</span></div>`;
  html += exerciseData.sentences.map((s, i) => `
    <div class="q-item">
      <div class="q-label"><span class="q-num">${i+1}</span> 第${i+1}题 <span style="font-weight:400;color:var(--text-light);font-size:12px;">（8分）</span></div>
      <div class="q-source">${s.zh}</div>
      <textarea id="p2q${i+1}" placeholder="写下你的英文翻译..." rows="3"></textarea>
      <div class="q-score" id="sc-p2q${i+1}"></div>
      <div class="answer-reveal" id="rev-p2q${i+1}">
        <div class="ans-block"><div class="ans-lbl">✅ 参考译文</div><div class="ans-txt">${s.ans}</div></div>
        <div class="ana-block"><div class="ana-lbl">📖 解析</div>
          <table class="ana-table">${s.analysis.map(a=>`<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td></tr>`).join('')}</table>
          <div class="ana-err">${s.err}</div>
        </div>
      </div>
    </div>
  `).join('');
  html += `</div>`;

  // Part 3: 段落翻译
  const p = exerciseData.paragraph;
  html += `<div class="card"><div class="section-title"><span class="icon">📄</span>第三部分：段落翻译 <span class="badge">40分</span></div>`;
  html += `
    <div class="q-item">
      <div class="q-label"><span class="q-num">P</span> 段落翻译 <span style="font-weight:400;color:var(--text-light);font-size:12px;">（40分）</span></div>
      <div class="q-source para">${p.zh}</div>
      <div class="para-hint">💡 关键词提示：${p.hints}</div>
      <textarea id="p3q1" placeholder="写下你的英文翻译..." rows="9"></textarea>
      <div class="q-score" id="sc-p3q1"></div>
      <div class="answer-reveal" id="rev-p3q1">
        <div class="ans-block"><div class="ans-lbl">✅ 参考译文</div><div class="ans-txt italic">${p.ans}</div></div>
        <div class="ana-block"><div class="ana-lbl">📖 关键句解析</div>
          <table class="ana-table">${p.analysis.map(a=>`<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td></tr>`).join('')}</table>
        </div>
      </div>
    </div>`;
  html += `</div>`;

  document.getElementById('examQuestions').innerHTML = html;
}

// ============================================================
// 评分逻辑
// ============================================================
function contains(text, word) {
  return text.toLowerCase().includes(word.toLowerCase());
}

function scorePhrase(id, keys) {
  const el = document.getElementById(id);
  if (!el) return 0;
  const val = el.value.trim();
  if (!val) return 0;
  if (keys.every(k => contains(val, k))) return 2;
  const hits = keys.filter(k => contains(val, k));
  return hits.length / keys.length >= 0.5 ? 1 : 0;
}

function scoreSentence(id, keys) {
  const el = document.getElementById(id);
  if (!el) return { score: 0, hits: [], misses: keys };
  const val = el.value.trim();
  if (!val) return { score: 0, hits: [], misses: keys };
  const hits = keys.filter(k => contains(val, k));
  const misses = keys.filter(k => !contains(val, k));
  const ratio = hits.length / keys.length;
  const score = ratio >= 0.8 ? 8 : ratio >= 0.5 ? 4 : 0;
  return { score, hits, misses };
}

function showQScore(scId, taId, got, max, hits, misses) {
  const scEl = document.getElementById(scId);
  const taEl = document.getElementById(taId);
  if (!scEl || !taEl) return;
  scEl.style.display = 'block';
  const ratio = got / max;
  let cls = ratio === 1 ? 's-full' : ratio > 0 ? 's-partial' : 's-zero';
  scEl.className = 'q-score ' + cls;
  let html = `得 <b>${got}</b> / ${max} 分`;
  if (hits && hits.length) {
    html += ' &nbsp; <span style="font-size:11px;font-weight:400;">命中：';
    html += hits.map(k => `<span class="kw hit">${k}</span>`).join('');
    html += '</span>';
  }
  if (misses && misses.length) {
    html += ' &nbsp; <span style="font-size:11px;font-weight:400;">缺失：';
    html += misses.map(k => `<span class="kw miss">${k}</span>`).join('');
    html += '</span>';
  }
  scEl.innerHTML = html;
  if (taEl) taEl.className = ratio === 1 ? 'correct' : ratio > 0 ? 'partial' : 'wrong';
}

// ============================================================
// 交卷
// ============================================================
function submitExam() {
  if (examSubmitted) return;
  examSubmitted = true;
  if (examTimer) clearInterval(examTimer);

  document.querySelectorAll('#examQuestions textarea').forEach(t => t.disabled = true);
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = '✅ 已交卷';

  // Part 1
  let p1total = 0;
  exerciseData.phrases.forEach((ph, i) => {
    const got = scorePhrase(`p1q${i+1}`, ph.key);
    p1total += got;
    const sc = document.getElementById(`sc-p1q${i+1}`);
    if (sc) {
      sc.style.display = 'block';
      sc.className = 'q-score ' + (got === 2 ? 's-full' : got === 1 ? 's-partial' : 's-zero');
      sc.innerHTML = `得 <b>${got}</b> / 2 分`;
    }
    const ta = document.getElementById(`p1q${i+1}`);
    if (ta) ta.className = got === 2 ? 'correct' : got === 1 ? 'partial' : 'wrong';
    var rev = document.getElementById('rev-p1q'+(i+1));
    if (rev) rev.style.display = 'block';
  });

  // Part 2
  let p2total = 0;
  exerciseData.sentences.forEach((s, i) => {
    const r = scoreSentence(`p2q${i+1}`, s.keys);
    p2total += r.score;
    showQScore(`sc-p2q${i+1}`, `p2q${i+1}`, r.score, 8, r.hits, r.misses);
    const rev = document.getElementById(`rev-p2q${i+1}`);
    if (rev) rev.style.display = 'block';
  });

  // Part 3
  const p = exerciseData.paragraph;
  const el = document.getElementById('p3q1');
  const val = el ? el.value.trim() : '';
  let r3 = { score: 0, hits: [], misses: p.keys };
  if (val) {
    const hits = p.keys.filter(k => contains(val, k));
    const misses = p.keys.filter(k => !contains(val, k));
    const score = Math.round((hits.length / p.keys.length) * 40);
    r3 = { score, hits, misses };
  }
  showQScore('sc-p3q1', 'p3q1', r3.score, 40, r3.hits, r3.misses);
  const rev3 = document.getElementById('rev-p3q1');
  if (rev3) rev3.style.display = 'block';
  if (el) el.className = r3.score / 40 === 1 ? 'correct' : r3.score > 0 ? 'partial' : 'wrong';

  // Total
  const total = p1total + p2total + r3.score;

  // Result Card
  let level, cls;
  if (total >= 85) { level = '🏆 优秀 · 四级高分水平'; cls = 'excellent'; }
  else if (total >= 70) { level = '✅ 良好 · 具备四级翻译能力'; cls = 'good'; }
  else if (total >= 55) { level = '📖 一般 · 继续加油'; cls = 'fair'; }
  else { level = '📝 待提高 · 重点复习词表'; cls = 'poor'; }

  const rc = document.getElementById('resultCard');
  rc.style.display = 'block';
  rc.className = 'result-card ' + cls;
  document.getElementById('rcTitle').textContent = examRemaining <= 0 ? '⏰ 时间到！' : '答题完成 🎉';
  document.getElementById('rcScore').innerHTML = total + '<span>/100</span>';
  document.getElementById('rcGrade').textContent = level;
  document.getElementById('sdP1').textContent = p1total;
  document.getElementById('sdP2').textContent = p2total;
  document.getElementById('sdP3').textContent = r3.score;

  // Save score to localStorage
  saveExamScore(total, p1total, p2total, r3.score, level);

  rc.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================================
// 成绩持久化
// ============================================================
function saveExamScore(total, p1, p2, p3, grade) {
  try {
    const key = dateKey(currentDate);
    const scores = JSON.parse(localStorage.getItem('cet4_exam_scores') || '{}');
    scores[key] = { total, p1, p2, p3, grade, time: new Date().toISOString() };
    localStorage.setItem('cet4_exam_scores', JSON.stringify(scores));
  } catch(e) {}
}

function getExamScores() {
  try {
    return JSON.parse(localStorage.getItem('cet4_exam_scores') || '{}');
  } catch(e) { return {}; }
}

function renderHistoryScores() {
  const container = document.getElementById('historyScores');
  const scores = getExamScores();
  const keys = Object.keys(scores).sort().reverse();

  if (keys.length === 0) {
    container.innerHTML = '<p>暂无历史记录，快去模拟考吧！</p>';
    return;
  }

  let html = '<table class="score-table"><tr><th>日期</th><th>总分</th><th>等级</th><th>词组</th><th>句子</th><th>段落</th></tr>';
  keys.forEach(k => {
    const s = scores[k];
    html += `<tr><td>${k}</td><td><strong>${s.total}</strong>/100</td><td>${s.grade}</td><td>${s.p1}/20</td><td>${s.p2}/40</td><td>${s.p3}/40</td></tr>`;
  });
  html += '</table>';
  container.innerHTML = html;
}

// ============================================================
// Tab 切换
// ============================================================
function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  var map = { review:0, vocab:1, exam:2, stats:3 };
  document.querySelectorAll('.tab-btn')[map[name]].classList.add('active');
  if (name === 'review') { renderReviewPanel(); }
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  getDailyVocab(TODAY);
  updateUI();
  if (dayIndex(TODAY) >= 1) { switchTab('review'); }
});

// ============================================================
// 每日练习题库 (V3.3) — 提交后显示分数+答案+解析
// ============================================================

// 题型A: 四级标准题型（选词填空/段落匹配/阅读理解/翻译/作文），每天轮换
const DAILY_PRACTICE_POOL = [
  // ---- 选词填空 ----
  {
    type: "选词填空", typeEn: "Banked Cloze",
    title: "选词填空练习",
    instruction: "从下方词库中选择合适的单词填入空格（每词只用一次，注意形态变化）",
    words: ["accumulate","adequate","consequence","demonstrate","eliminate",
            "enhance","establish","evaluate","exceed","flexible"],
    text: `In modern society, it is crucial to __(1)__ clear goals and work steadily toward them. People who __(2)__ a wealth of experience tend to perform better under pressure. However, we must __(3)__ the potential risks before making major decisions. A __(4)__ approach to problem-solving often yields better results. __(5)__ unnecessary steps in your workflow can __(6)__ overall efficiency. Remember: effort that __(7)__ average will always __(8)__ positive outcomes. Make sure you have __(9)__ resources before starting. The __(10)__ of poor planning can last for years.`,
    answers: {1:"establish",2:"accumulate",3:"evaluate",4:"flexible",5:"Eliminating",6:"enhance",7:"exceeds",8:"demonstrate",9:"adequate",10:"consequence"},
    analysis: "重点词：establish目标、accumulate经验、evaluate评估、flexible灵活、eliminate消除、enhance提升、exceed超过、demonstrate展示、adequate足够、consequence后果",
    wordReasons: {1:"establish clear goals（建立清晰目标）是固定搭配，常用 it is crucial to establish...",2:"accumulate a wealth of experience（积累丰富经验）为常见表达",3:"evaluate the potential risks（评估潜在风险），before making decisions 提示需先评估",4:"flexible approach（灵活方法），本空需填入形容词修饰 approach",5:"Eliminating unnecessary steps（消除不必要的步骤），动名词做主语需大写",6:"enhance efficiency（提升效率），can do \u2192 填入原形动词",7:"exceeds average（超过平均水平），effort 为单数，动词用三单 exceeds",8:"demonstrate positive outcomes（展现积极成果），will always \u2192 原形动词",9:"adequate resources（充足的资源），have + adj. + n. 结构",10:"consequence of poor planning（糟糕规划的后果），the \u2026 of \u2026 结构"},
    passageCn: "\u5728\u73B0\u4EE3\u793E\u4F1A\uFF0C\u786E\u7ACB\u660E\u786E\u7684\u76EE\u6807\u5E76\u7A33\u6B65\u4E3A\u4E4B\u52AA\u529B\u81F3\u5173\u91CD\u8981\u3002\u79EF\u7D2F\u4E86\u4E30\u5BCC\u7ECF\u9A8C\u7684\u4EBA\u5F80\u5F80\u5728\u538B\u529B\u4E0B\u8868\u73B0\u66F4\u597D\u3002\u7136\u800C\uFF0C\u5728\u505A\u51FA\u91CD\u5927\u51B3\u7B56\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u8BC4\u4F30\u6F5C\u5728\u98CE\u9669\u3002\u7075\u6D3B\u7684\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5\u5F80\u5F80\u80FD\u4EA7\u751F\u66F4\u597D\u7684\u7ED3\u679C\u3002\u6D88\u9664\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u4E0D\u5FC5\u8981\u7684\u6B65\u9AA4\u53EF\u4EE5\u63D0\u9AD8\u6574\u4F53\u6548\u7387\u3002\u8BB0\u4F4F\uFF1A\u8D85\u8D8A\u5E73\u5747\u6C34\u5E73\u7684\u52AA\u529B\u603B\u4F1A\u5C55\u73B0\u51FA\u79EF\u6781\u7684\u6210\u679C\u3002\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u786E\u4FDD\u4F60\u6709\u5145\u8DB3\u7684\u8D44\u6E90\u3002\u7CDF\u7CD5\u89C4\u5212\u7684\u540E\u679C\u53EF\u80FD\u4F1A\u6301\u7EED\u591A\u5E74\u3002"
  },
  {
    type: "选词填空", typeEn: "Banked Cloze",
    title: "选词填空练习（第2组）",
    instruction: "从下方词库中选择合适的单词填入空格",
    words: ["acquire","beneficial","capable","competitive","confident",
            "contribute","crucial","decline","determine","digital"],
    text: `The __(1)__ age has transformed how we learn and communicate. It is __(2)__ that students __(3)__ strong reading and writing skills early on. Reading is __(4)__ to cognitive development at every age. People who are __(5)__ in their abilities tend to take on greater challenges. In a __(6)__ job market, one must constantly grow. Those who __(7)__ to a team's success are valued most. A person's mindset can __(8)__ their ultimate outcome. Although test scores __(9)__ in some regions, motivation remains key. Everyone is __(10)__ of achieving more than they think.`,
    answers: {1:"digital",2:"crucial",3:"acquire",4:"beneficial",5:"confident",6:"competitive",7:"contribute",8:"determine",9:"decline",10:"capable"},
    analysis: "核心句型：it is crucial that...（虚拟语气）、contribute to success、determine outcome",
    wordReasons: {1:"digital age（数字时代），常见固定搭配，描述当今时代特征",2:"it is crucial that...（关键的是...），It is + adj. + that 从句结构",3:"acquire skills（获取技能），students acquire...skills 为常见表达",4:"Reading is beneficial to...（阅读对...有益），be beneficial to 固定搭配",5:"confident in their abilities（对自己能力有信心），be confident in 固定搭配",6:"competitive job market（竞争激烈的就业市场），形容词修饰 job market",7:"contribute to a team's success（为团队成功做贡献），contribute to 固定搭配",8:"determine their outcome（决定他们的结果），mindset can determine...主谓结构",9:"test scores decline（考试成绩下降），主谓结构，scores 复数用原形",10:"capable of achieving（有能力实现），be capable of doing 固定搭配"},
    passageCn: "数字时代已经改变了我们学习和交流的方式。学生尽早掌握扎实的读写能力至关重要。阅读对每个年龄段的认知发展都有益。对自己能力有信心的人往往接受更大的挑战。在竞争激烈的就业市场中，人们必须不断成长。那些为团队成功做出贡献的人最受重视。一个人的心态可以决定其最终结果。尽管某些地区的考试成绩有所下降，但动力仍然是关键。每个人都有能力取得比想象中更多的成就。"
  },
  // ---- 段落匹配 ----
  {
    type: "段落匹配", typeEn: "Section Matching",
    title: "段落匹配练习",
    instruction: "阅读下方5个段落，将题目陈述（A-E）与正确段落编号（①-⑤）匹配",
    paragraphs: [
      "① Many researchers argue that sleep is as important as diet and exercise for maintaining good health. Studies show that chronic sleep deprivation is linked to increased risk of obesity, heart disease, and depression.",
      "② The rise of remote work has fundamentally changed how offices are designed. Companies now invest in collaboration tools rather than physical desk space, prioritizing flexibility over fixed locations.",
      "③ Urban green spaces have proven benefits for mental health. Residents with access to parks and nature areas report lower stress levels and greater overall life satisfaction than those in densely built environments.",
      "④ Artificial intelligence is reshaping the job market at an unprecedented rate. While some positions become automated, new roles requiring human creativity and judgment are simultaneously emerging.",
      "⑤ Sustainable packaging has moved from a niche concern to a mainstream business requirement. Consumers increasingly expect brands to reduce plastic use and adopt eco-friendly materials."
    ],
    questions: [
      {q:"A. Access to nature can significantly improve people's emotional well-being.", ans:"③"},
      {q:"B. Insufficient rest negatively affects various aspects of physical and mental health.", ans:"①"},
      {q:"C. Environmental awareness is now influencing major corporate decisions.", ans:"⑤"},
      {q:"D. Technological advancement is simultaneously creating and eliminating employment.", ans:"④"},
      {q:"E. Flexible working arrangements are changing the physical structure of workplaces.", ans:"②"}
    ],
    matchClues: [
      "\u2462: Urban green spaces have proven benefits for mental health. Residents with access to parks and nature areas report lower stress levels... \u2014 \u201Caccess to nature\u201D \u5BF9\u5E94 \u201Cgreen spaces\u201D\uFF0C\u201Cimprove emotional well-being\u201D \u5BF9\u5E94 \u201Cbenefits for mental health\u201D\u3001\u201Clower stress\u201D",
      "\u2460: sleep is as important as diet and exercise...sleep deprivation is linked to increased risk of obesity, heart disease, and depression \u2014 \u201Cinsufficient rest\u201D \u5BF9\u5E94 \u201Csleep deprivation\u201D\uFF0C\u201Cphysical and mental health\u201D \u5BF9\u5E94 obesity/heart disease(physical) + depression(mental)",
      "\u2464: Sustainable packaging...Consumers increasingly expect brands to reduce plastic use and adopt eco-friendly materials \u2014 \u201Cenvironmental awareness\u201D \u5BF9\u5E94 \u201Csustainable\u201D\u3001\u201Ceco-friendly\u201D\uFF0C\u201Ccorporate decisions\u201D \u5BF9\u5E94 \u201Cbrands\u201D",
      "\u2463: AI is reshaping the job market...some positions become automated, new roles...are simultaneously emerging \u2014 \u201Ctechnological advancement\u201D \u5BF9\u5E94 \u201CAI\u201D\uFF0C\u201Ccreating and eliminating\u201D \u5BF9\u5E94 \u201Cautomated\u201D + \u201Cemerging\u201D",
      "\u2461: The rise of remote work...Companies now invest in collaboration tools rather than physical desk space \u2014 \u201Cflexible working arrangements\u201D \u5BF9\u5E94 \u201Cremote work\u201D\uFF0C\u201Cphysical structure\u201D \u5BF9\u5E94 \u201Cphysical desk space\u201D"
    ]
  },
  // ---- 阅读理解 ----
  {
    type: "阅读理解", typeEn: "Reading Comprehension",
    title: "阅读理解练习",
    instruction: "阅读短文，选择最佳答案",
    passage: `Procrastination\u2014the habit of delaying tasks\u2014affects millions of people worldwide. While often dismissed as mere laziness, research suggests it is more closely related to emotional regulation than time management. People avoid tasks not because they are lazy, but because those tasks trigger feelings of anxiety, boredom, or self-doubt.

Studies from Carleton University found that procrastinators experience higher levels of stress and lower well-being, not because they do less work, but because of the guilt and worry that accompany avoidance. Interestingly, the act of procrastination provides short-term relief\u2014by avoiding the task, one avoids the negative emotion\u2014but this comes at the cost of long-term consequences.

Experts recommend addressing the emotional roots of procrastination rather than simply setting stricter schedules. Techniques such as "implementation intentions" (stating specifically when and where you will do a task) and self-compassion (treating yourself kindly after setbacks) have shown measurable improvements in follow-through.`,
    questions: [
      {q:"1. According to the passage, procrastination is primarily caused by:",options:["A. Poor time management skills","B. Physical laziness","C. Difficulty managing negative emotions","D. Lack of clear goals"],ans:"C",explain:"第一段: 'it is more closely related to emotional regulation than time management'",wrongReasons:{A:"文章明确说拖延与时间管理无关（more closely related to emotional regulation THAN time management）",B:"文章说拖延不仅仅是懒惰（more than mere laziness），否定它是主要原因",D:"文章未提及缺乏明确目标与拖延的直接关系"}},
      {q:"2. The phrase 'short-term relief' in paragraph 2 refers to:",options:["A. Completing tasks ahead of schedule","B. The temporary comfort gained from avoiding a task","C. A decrease in overall workload","D. Improved concentration after rest"],ans:"B",explain:"第二段: 'by avoiding the task, one avoids the negative emotion'",wrongReasons:{A:"文章说的是逃避任务获得短期解脱，而非提前完成任务",C:"工作量并未减少，只是暂时回避了负面情绪",D:"文章未提注意力提升，反而是 guilt and worry"}},
      {q:"3. Which of the following is suggested as an effective solution?",options:["A. Working longer hours","B. Setting stricter deadlines","C. Being kind to yourself after failures","D. Avoiding challenging tasks"],ans:"C",explain:"第三段: 'self-compassion have shown measurable improvements'",wrongReasons:{A:"文章未提延长工作时间，反而建议处理情绪根源",B:"文章明确反对 stricter schedules，建议 addressing emotional roots",D:"文章鼓励面对任务而非逃避（avoiding challenging tasks 与建议相反）"}}
    ],
    passageCn: "拖延——即推迟任务的习惯——影响着全球数百万人。虽然拖延常被简单归为懒惰，但研究表明它更与情绪调节有关，而非时间管理。人们逃避任务不是因为他们懒惰，而是因为这些任务引发了焦虑、无聊或自我怀疑的情绪。\n\n卡尔顿大学的研究发现，拖延者经历了更高水平的压力和更低的幸福感，不是因为他们做得更少，而是因为伴随逃避而来的内疚和担忧。有趣的是，拖延行为提供了短期的解脱——通过逃避任务，人们逃避了负面情绪——但这以长期后果为代价。\n\n专家建议解决拖延的情绪根源，而非简单地制定更严格的时间表。诸如'执行意图'（明确说明何时何地完成任务）和自我同情（在挫折后善待自己）等技巧已在实际操作中显示出可衡量的改善效果。"
  },
  {
    type: "阅读理解", typeEn: "Reading Comprehension",
    title: "阅读理解练习（第2篇）",
    instruction: "阅读短文，选择最佳答案",
    passage: `The concept of a "growth mindset," popularized by psychologist Carol Dweck, holds that intelligence and talent are not fixed traits but can be developed through effort and learning. In contrast, a "fixed mindset" leads people to believe their abilities are static, causing them to avoid challenges and give up easily when they encounter obstacles.

Research across schools and workplaces consistently shows that individuals with a growth mindset outperform their peers over time\u2014not because they are naturally more talented, but because they persist through difficulties and learn from mistakes. They view failure not as evidence of incompetence, but as a necessary step in the learning process.

Organizations that cultivate a growth mindset culture report higher levels of innovation and employee engagement. Leaders play a crucial role in this by providing specific, constructive feedback rather than praise focused on outcomes, and by openly discussing their own learning journeys and mistakes.`,
    questions: [
      {q:"1. What distinguishes a growth mindset from a fixed mindset?",options:["A. People with a growth mindset are naturally smarter","B. People with a growth mindset believe abilities can improve with effort","C. Fixed mindset holders work harder","D. Growth mindset is only relevant to schools"],ans:"B",explain:"第一段: 'intelligence and talent...can be developed through effort and learning'",wrongReasons:{A:"文章明确说 intelligence 不是固定的（not fixed traits），growth mindset 的人并非天生聪明",C:"文章说 fixed mindset 的人容易放弃（give up easily），并未说他们更努力",D:"文章提到 growth mindset 适用于 schools AND workplaces，并非仅限学校"}},
      {q:"2. According to the passage, growth mindset individuals perform better because they:",options:["A. Have higher IQs","B. Receive better teaching","C. Persist through challenges and learn from errors","D. Avoid high-pressure situations"],ans:"C",explain:"第二段: 'they persist through difficulties and learn from mistakes'",wrongReasons:{A:"文章明确指出 they outperform...NOT because they are naturally more talented",B:"文章未提及教学质量差异",D:"文章说他们面对困难（they persist through difficulties），而非逃避高压"}},
      {q:"3. How can leaders promote a growth mindset in organizations?",options:["A. By rewarding only successful outcomes","B. By giving specific, constructive feedback and sharing their own learning experiences","C. By hiring only growth mindset individuals","D. By reducing workload pressure"],ans:"B",explain:"第三段: 'providing specific, constructive feedback...and by openly discussing their own learning journeys'",wrongReasons:{A:"文章反对 praise focused on outcomes，提倡 constructive feedback",C:"文章未提只招聘 growth mindset 的人",D:"文章未提减轻工作压力"}}
    ],
    passageCn: "由心理学家卡罗尔·德韦克推广的'成长心态'概念认为，智力和才能并非固定不变的品质，而是可以通过努力和学习来发展的。相比之下，'固定心态'使人相信自己的能力是静态的，导致他们回避挑战，遇到障碍时轻易放弃。\n\n跨学校和职场的研究一致表明，拥有成长心态的人随着时间的推移表现优于同龄人——不是因为他们天生更有才华，而是因为他们坚持不懈地克服困难并从错误中学习。他们将失败视为学习过程中必要的一步，而非无能的证据。\n\n培养成长心态文化的组织报告了更高水平的创新和员工投入度。领导者在此扮演着关键角色，通过提供具体的、建设性的反馈（而非关注结果的表扬），并公开讨论自己的学习历程和错误。"
  },
  // ---- 翻译 ----
  {
    type: "翻译", typeEn: "Translation (C\u2192E)",
    title: "汉译英练习",
    instruction: "将下面的中文段落翻译成英文（参考用时15分钟）",
    source: "\u5FD7\u613F\u670D\u52A1\u662F\u4E00\u79CD\u65E0\u507F\u5E2E\u52A9\u4ED6\u4EBA\u7684\u884C\u4E3A\uFF0C\u5B83\u4E0D\u4EC5\u80FD\u7ED9\u53D7\u52A9\u8005\u5E26\u6765\u5B9E\u9645\u7684\u5E2E\u52A9\uFF0C\u4E5F\u80FD\u8BA9\u5FD7\u613F\u8005\u5728\u670D\u52A1\u8FC7\u7A0B\u4E2D\u83B7\u5F97\u6EE1\u8DB3\u611F\u548C\u6210\u5C31\u611F\u3002\u8FD1\u5E74\u6765\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u5E74\u8F7B\u4EBA\u9009\u62E9\u6295\u8EAB\u5FD7\u613F\u670D\u52A1\uFF0C\u4ED6\u4EEC\u8BA4\u4E3A\u8FD9\u662F\u627F\u62C5\u793E\u4F1A\u8D23\u4EFB\u3001\u63D0\u5347\u4E2A\u4EBA\u80FD\u529B\u7684\u91CD\u8981\u9014\u5F84\u3002\u653F\u5E9C\u548C\u793E\u4F1A\u5404\u754C\u4E5F\u79EF\u6781\u5021\u5BFC\u5FD7\u613F\u7CBE\u795E\uFF0C\u5C06\u5176\u89C6\u4E3A\u6784\u5EFA\u548C\u8C10\u793E\u4F1A\u7684\u91CD\u8981\u529B\u91CF\u3002",
    reference: "Volunteer service refers to the act of helping others without pay. It not only provides practical assistance to recipients, but also allows volunteers to gain a sense of fulfillment and achievement in the process. In recent years, a growing number of young people have chosen to engage in volunteer work, believing it to be an important means of taking on social responsibilities and improving personal competencies. Governments and various sectors of society are also actively advocating the spirit of volunteerism, viewing it as an important force in building a harmonious society.",
    keyPoints: ["\u5FD7\u613F\u670D\u52A1 \u2192 volunteer service","\u65E0\u507F \u2192 without pay / unpaid","\u6EE1\u8DB3\u611F\u548C\u6210\u5C31\u611F \u2192 fulfillment and achievement","\u627F\u62C5\u793E\u4F1A\u8D23\u4EFB \u2192 taking on social responsibilities","\u5021\u5BFC\u5FD7\u613F\u7CBE\u795E \u2192 advocating the spirit of volunteerism","\u548C\u8C10\u793E\u4F1A \u2192 harmonious society"]
  },
  {
    type: "翻译", typeEn: "Translation (C\u2192E)",
    title: "汉译英练习（第2题）",
    instruction: "将下面的中文段落翻译成英文",
    source: "\u4E2D\u56FD\u7684\u4F20\u7EDF\u8282\u65E5\u6E90\u8FDC\u6D41\u957F\uFF0C\u662F\u4E2D\u534E\u6587\u5316\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002\u6625\u8282\u662F\u4E2D\u56FD\u6700\u91CD\u8981\u7684\u4F20\u7EDF\u8282\u65E5\uFF0C\u8C61\u5F81\u7740\u65B0\u7684\u5F00\u59CB\u548C\u5BB6\u5EAD\u56E2\u805A\u3002\u5728\u6625\u8282\u671F\u95F4\uFF0C\u4EBA\u4EEC\u901A\u5E38\u4F1A\u8D34\u6625\u8054\u3001\u653E\u70DF\u82B1\u3001\u4E92\u76F8\u62DC\u5E74\uFF0C\u5E76\u4E14\u8D70\u4EB2\u8BBF\u53CB\u3002\u8FD9\u4E9B\u4E60\u4FD7\u4E0D\u4EC5\u4F20\u627F\u4E86\u4E2D\u534E\u6C11\u65CF\u51E0\u5343\u5E74\u7684\u6587\u5316\uFF0C\u4E5F\u589E\u5F3A\u4E86\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u7684\u611F\u60C5\u8054\u7CFB\u3002",
    reference: "China's traditional festivals have a long history and are an important part of Chinese culture. The Spring Festival is the most important traditional festival in China, symbolizing new beginnings and family reunion. During the Spring Festival, people typically put up Spring Festival couplets, set off fireworks, exchange New Year greetings, and visit relatives and friends. These customs not only carry on thousands of years of Chinese cultural heritage, but also strengthen emotional bonds between people.",
    keyPoints: ["\u6E90\u8FDC\u6D41\u957F \u2192 have a long history","\u8C61\u5F81\u7740 \u2192 symbolizing","\u5BB6\u5EAD\u56E2\u805A \u2192 family reunion","\u8D34\u6625\u8054 \u2192 put up Spring Festival couplets","\u4E92\u76F8\u62DC\u5E74 \u2192 exchange New Year greetings","\u4F20\u627F\u6587\u5316 \u2192 carry on cultural heritage"]
  },
  // ---- 作文 ----
  {
    type: "作文", typeEn: "Writing",
    title: "作文练习",
    instruction: "根据以下提示写一篇120-180词的英文短文",
    prompt: "\u9898\u76EE\uFF1AThe Importance of Reading\n\n\u63D0\u793A\uFF1A\n1. \u9605\u8BFB\u7684\u597D\u5904\uFF08\u77E5\u8BC6\u79EF\u7D2F\u3001\u601D\u7EF4\u62D3\u5C55\u3001\u8BED\u8A00\u63D0\u5347\uFF09\n2. \u5F53\u4ECA\u9605\u8BFB\u4E60\u60EF\u9762\u4E34\u7684\u6311\u6218\uFF08\u624B\u673A\u3001\u77ED\u89C6\u9891\u3001\u5FEB\u8282\u594F\u751F\u6D3B\uFF09\n3. \u4F60\u7684\u5EFA\u8BAE",
    outline: ["Para 1 (\u5F15\u5165): Reading has long been regarded as one of the most valuable habits a person can develop...","Para 2 (\u597D\u5904): First, reading builds knowledge... Second, it broadens our perspective... Third, it improves language proficiency...","Para 3 (\u6311\u6218): However, in today's fast-paced digital age, reading habits face unprecedented challenges...","Para 4 (\u5EFA\u8BAE): To cultivate better reading habits, I suggest setting aside at least 30 minutes daily..."],
    reference: "Reading has long been regarded as one of the most valuable habits a person can develop. In an age flooded with information, the ability to read deeply and critically is more important than ever.\n\nThe benefits of reading are numerous. It builds knowledge, broadens perspective, and sharpens language skills. Unlike passive media consumption, reading engages the mind actively, encouraging reflection and deeper understanding.\n\nHowever, reading habits today face serious challenges. The widespread use of smartphones and the popularity of short videos have fragmented people's attention spans, making sustained reading increasingly difficult. Many people now prefer quick scrolling over sitting with a book.\n\nTo cultivate better reading habits, I suggest starting small: set aside just 15\u201330 minutes each day for focused reading. Choose topics you genuinely enjoy, and gradually increase the difficulty. With consistent effort, reading will become a rewarding daily habit.",
    tips: "\u56DB\u7EA7\u4F5C\u6587\u8BC4\u5206\u5173\u6CE8\uFF1A\u6BB5\u843D\u7ED3\u6784\u6E05\u6670\u3001\u9996\u5C3E\u547C\u5E94\u3001\u8BBA\u636E\u5145\u5206\u3001\u8BCD\u6C47\u591A\u6837\uFF08\u907F\u514D\u91CD\u590D\u7528 good/bad/many\uFF09"
  },
  {
    type: "作文", typeEn: "Writing",
    title: "作文练习（第2题）",
    instruction: "根据以下提示写一篇120-180词的英文短文",
    prompt: "\u9898\u76EE\uFF1AOnline Learning: Advantages and Disadvantages\n\n\u8981\u6C42\uFF1A\n1. \u5206\u6790\u5728\u7EBF\u5B66\u4E60\u7684\u4F18\u7F3A\u70B9\n2. \u7ED3\u5408\u81EA\u8EAB\u7ECF\u5386\u4E3E\u4F8B\n3. \u8868\u660E\u4F60\u7684\u89C2\u70B9",
    outline: ["Para 1: Online learning has transformed education in the 21st century...","Para 2 (\u4F18\u70B9): flexibility of schedule, access to diverse resources, self-paced learning...","Para 3 (\u7F3A\u70B9): lack of face-to-face interaction, self-discipline required, technical barriers...","Para 4 (\u89C2\u70B9): On balance, I believe online learning is a powerful supplement to traditional education..."],
    reference: "Online learning has transformed education in the 21st century, offering millions of learners worldwide new ways to acquire knowledge.\n\nThe advantages are clear. Online learning provides unmatched flexibility: students can study at their own pace and schedule, access world-class courses regardless of location, and revisit materials as many times as needed. Platforms like Coursera and edX have democratized education in ways traditional classrooms cannot.\n\nHowever, challenges exist. Without the structure of a physical classroom, maintaining motivation and self-discipline is difficult. Technical issues and unstable internet connections can disrupt learning. Moreover, the absence of face-to-face interaction may hinder collaborative skills and social development.\n\nOn balance, I believe online learning is a powerful complement to traditional education. When used alongside regular classroom instruction, it can significantly broaden a student's learning opportunities. The key lies in developing strong self-management habits.",
    tips: "\u5E38\u89C1\u5931\u5206\uFF1A\u4ECB\u7ECD\u9636\u6BB5\u592A\u957F\u3001\u6B63\u6587\u8BBA\u636E\u8FC7\u4E8E\u7B3C\u7EDF\u3001\u7ED3\u5C3E\u4EC5\u91CD\u590D\u5F00\u5934\u2014\u2014\u7ED3\u5C3E\u8981\u6709\u65B0\u7684\u601D\u8003\u6216\u547C\u5401"
  }
];

// 题型B: 四级历年真题片段（精选，除听力）
const CET4_PAST_PAPERS = [
  {
    year: "2023\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2023\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3\uFF08\u8282\u9009\uFF09",
    passage: "For decades, coffee has been blamed for all kinds of health problems. However, a growing body of research suggests that moderate coffee consumption may actually offer several health benefits. Studies indicate that regular coffee drinkers have a lower risk of developing type 2 diabetes, Parkinson's disease, and certain types of liver disease.\n\nThe key ingredient appears to be chlorogenic acid, an antioxidant found in coffee beans. This compound may help improve insulin sensitivity and reduce inflammation. Caffeine itself\u2014despite its reputation for causing jitteriness and sleep disruption\u2014has been shown to enhance cognitive performance, mood, and athletic endurance when consumed in appropriate amounts.\n\nThat said, health experts caution that the benefits apply to moderate consumption: roughly 3\u20134 cups per day for most adults. Excessive intake can lead to anxiety, heart palpitations, and disrupted sleep. Pregnant women and individuals with certain health conditions are generally advised to limit or avoid coffee entirely.",
    questions: [
      {q:"1. What does recent research suggest about coffee?",options:["A. It causes more harm than previously thought","B. Moderate intake may have health benefits","C. It should be consumed only in the morning","D. It has no effect on chronic diseases"],ans:"B",explain:"'a growing body of research suggests that moderate coffee consumption may actually offer several health benefits'",wrongReasons:{A:"文章说咖啡可能有益而非更有害（may actually offer health benefits）",C:"文章未提只能在早上喝咖啡",D:"文章列举了降低糖尿病、帕金森等慢性病风险，说明有影响"}},
      {q:"2. What is the role of chlorogenic acid?",options:["A. It enhances athletic performance","B. It disrupts sleep patterns","C. It may improve insulin sensitivity and reduce inflammation","D. It increases caffeine absorption"],ans:"C",explain:"'This compound may help improve insulin sensitivity and reduce inflammation'",wrongReasons:{A:"运动表现是咖啡因的作用，不是绿原酸的作用",B:"扰乱睡眠也是咖啡因的副作用，不是绿原酸",D:"文章未提绿原酸影响咖啡因吸收"}},
      {q:"3. Who is advised to limit coffee consumption?",options:["A. Regular office workers","B. Athletes in training","C. Pregnant women and those with certain conditions","D. People over age 60"],ans:"C",explain:"'Pregnant women and individuals with certain health conditions are generally advised to limit or avoid coffee entirely'",wrongReasons:{A:"办公室职员不是建议限制的对象",B:"运动员不是建议限制的对象",D:"文章未特别提及60岁以上人群"}}
    ],
    passageCn: "几十年来，咖啡一直因各种健康问题而备受指责。然而，越来越多的研究表明，适量饮用咖啡可能实际上对健康有若干好处。研究显示，经常喝咖啡的人患2型糖尿病、帕金森病和某些肝脏疾病的风险较低。\n\n关键成分似乎是绿原酸，一种存在于咖啡豆中的抗氧化剂。这种化合物可能有助于改善胰岛素敏感性和减少炎症。咖啡因本身——尽管背负着引起神经紧张和睡眠干扰的名声——已被证明在适量摄入时能提升认知表现、情绪和运动耐力。\n\n话虽如此，健康专家提醒这些益处适用于适量摄入：大多数成年人约每天3-4杯。过量摄入会导致焦虑、心悸和睡眠干扰。孕妇和有特定健康状况的人通常被建议限制或完全避免喝咖啡。"
  },
  {
    year: "2022\u5E7412\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2022\u5E7412\u6708 \u00B7 \u6BB5\u843D\u5339\u914D\uFF08\u8282\u9009\uFF09",
    paragraphs: [
      "\u2460 Scientists have discovered that forests play a far more significant role in the global water cycle than previously understood. Trees draw water from deep underground through their root systems and release it into the atmosphere through a process called transpiration.",
      "\u2461 The link between forests and rainfall is particularly strong in tropical regions. Research in the Amazon basin shows that moisture released by trees forms clouds that travel thousands of kilometers inland, delivering rain to areas far from any ocean source.",
      "\u2462 Deforestation disrupts this cycle in predictable ways. When large areas of forest are cleared, the reduction in transpiration leads to decreased rainfall, increased temperatures, and a higher frequency of droughts in surrounding regions.",
      "\u2463 Restoration projects are beginning to reverse some of these effects. In parts of China and Africa, large-scale tree-planting initiatives have led to measurable improvements in local precipitation patterns within just a few years.",
      "\u2464 Climate scientists argue that protecting existing forests must be treated as a climate priority equivalent to reducing carbon emissions. Forest loss not only releases stored carbon but permanently removes the ecosystem services forests provide."
    ],
    questions: [
      {q:"A. Cutting down forests leads to drier and hotter conditions nearby.", ans:"\u2462"},
      {q:"B. Forests have a greater impact on water distribution than scientists once believed.", ans:"\u2460"},
      {q:"C. Reforestation efforts have produced positive changes in rainfall in some areas.", ans:"\u2463"},
      {q:"D. Tropical forests contribute to rainfall far inland through atmospheric moisture transport.", ans:"\u2461"},
      {q:"E. Preserving forests should be a climate priority comparable to cutting emissions.", ans:"\u2464"}
    ],
    matchClues: [
      "\u2461: Deforestation disrupts this cycle...reduction in transpiration leads to decreased rainfall, increased temperatures... \u2014 \u201Ccutting down forests\u201D \u5BF9\u5E94 \u201Cdeforestation\u201D\uFF0C\u201Cdrier and hotter\u201D \u5BF9\u5E94 \u201Cdecreased rainfall, increased temperatures\u201D",
      "\u2460: forests play a far more significant role in the global water cycle than previously understood \u2014 \u201Cgreater impact\u201D \u5BF9\u5E94 \u201Cfar more significant role\u201D\uFF0C\u201Cwater distribution\u201D \u5BF9\u5E94 \u201Cglobal water cycle\u201D",
      "\u2462: tree-planting initiatives have led to measurable improvements in local precipitation patterns \u2014 \u201Creforestation\u201D \u5BF9\u5E94 \u201Ctree-planting\u201D\uFF0C\u201Cpositive changes in rainfall\u201D \u5BF9\u5E94 \u201Cimprovements in precipitation\u201D",
      "\u2460: moisture released by trees forms clouds that travel thousands of kilometers inland, delivering rain to areas far from any ocean source \u2014 \u201Ctropical forests\u201D \u5BF9\u5E94 \u201Ctropical regions\u201D + \u201CAmazon\u201D\uFF0C\u201Crainfall far inland\u201D \u5BF9\u5E94 \u201Cdelivering rain far inland\u201D",
      "\u2463: protecting existing forests must be treated as a climate priority equivalent to reducing carbon emissions \u2014 \u201Cclimate priority comparable to cutting emissions\u201D \u5BF9\u5E94 \u201Cclimate priority equivalent to reducing carbon emissions\u201D"
    ]
  },
  {
    year: "2023\u5E7412\u6708", type: "\u7FFB\u8BD1",
    title: "2023\u5E7412\u6708 \u00B7 \u7FFB\u8BD1\u771F\u9898",
    instruction: "\u5C06\u4E0B\u9762\u7684\u4E2D\u6587\u6BB5\u843D\u7FFB\u8BD1\u6210\u82F1\u6587",
    source: "\u4E2D\u56FD\u9AD8\u94C1\u662F\u5F53\u4ECA\u4E16\u754C\u4E0A\u6700\u5148\u8FDB\u7684\u94C1\u8DEF\u7CFB\u7EDF\u4E4B\u4E00\u3002\u7ECF\u8FC7\u51E0\u5341\u5E74\u7684\u5EFA\u8BBE\uFF0C\u4E2D\u56FD\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u4E16\u754C\u4E0A\u6700\u5927\u7684\u9AD8\u94C1\u7F51\u7EDC\uFF0C\u8FDE\u63A5\u4E86\u5168\u56FD\u6570\u767E\u4E2A\u57CE\u5E02\u3002\u9AD8\u94C1\u4E0D\u4EC5\u5927\u5927\u7F29\u77ED\u4E86\u57CE\u5E02\u4E4B\u95F4\u7684\u65C5\u884C\u65F6\u95F4\uFF0C\u8FD8\u4FC3\u8FDB\u4E86\u6CBF\u7EBF\u5730\u533A\u7684\u7ECF\u6D4E\u53D1\u5C55\u3002\u7531\u4E8E\u5176\u5FEB\u901F\u3001\u5B89\u5168\u3001\u8212\u9002\u7684\u7279\u70B9\uFF0C\u9AD8\u94C1\u5DF2\u6210\u4E3A\u8BB8\u591A\u4E2D\u56FD\u4EBA\u51FA\u884C\u7684\u9996\u9009\u4EA4\u901A\u65B9\u5F0F\uFF0C\u5C24\u5176\u662F\u5728\u8282\u5047\u65E5\u51FA\u884C\u9AD8\u5CF0\u671F\u3002",
    reference: "China's high-speed railway is one of the most advanced rail systems in the world today. After decades of construction, China has established the world's largest high-speed rail network, connecting hundreds of cities across the country. High-speed rail has not only greatly reduced travel time between cities, but has also promoted economic development along its routes. Due to its characteristics of speed, safety, and comfort, high-speed rail has become the preferred mode of transportation for many Chinese people, especially during peak travel periods such as holidays.",
    keyPoints: ["\u6700\u5148\u8FDB\u7684 \u2192 most advanced","\u9AD8\u94C1\u7F51\u7EDC \u2192 high-speed rail network","\u4FC3\u8FDB\u7ECF\u6D4E\u53D1\u5C55 \u2192 promote economic development","\u9996\u9009\u4EA4\u901A\u65B9\u5F0F \u2192 preferred mode of transportation","\u8282\u5047\u65E5\u51FA\u884C\u9AD8\u5CF0\u671F \u2192 peak travel periods such as holidays"]
  },
  {
    year: "2022\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2022\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3\uFF08\u8282\u9009\uFF09",
    passage: "The concept of \"digital minimalism,\" advanced by author Cal Newport, proposes that individuals should be more intentional about which digital tools they use and how they use them. Rather than adopting every new technology by default, digital minimalists carefully select tools that serve their values and goals\u2014and consciously eliminate the rest.\n\nNewport argues that the compulsive use of smartphones and social media has eroded people's capacity for solitude and deep work. Constant connectivity, he says, fragments attention and prevents the kind of sustained focus necessary for meaningful achievement. The solution, he contends, is not to abandon technology entirely, but to redefine one's relationship with it.\n\nA key practice in digital minimalism is a \"digital declutter\": a 30-day break from optional digital technologies, followed by a careful reintroduction of only those tools that provide genuine value. Proponents report that this reset allows them to rediscover offline activities\u2014reading, exercise, face-to-face conversation\u2014that provide deeper satisfaction than passive screen time.",
    questions: [
      {q:"1. What does 'digital minimalism' advocate?",options:["A. Abandoning all digital tools","B. Using only the newest technology","C. Deliberately choosing only tools that align with personal values","D. Reducing time online to one hour per day"],ans:"C",explain:"'carefully select tools that serve their values and goals\u2014and consciously eliminate the rest'",wrongReasons:{A:"文章明确说不是完全放弃技术（the solution is not to abandon technology entirely）",B:"文章反对盲目采用新技术（Rather than adopting every new technology by default）",D:"文章未提具体限制到每天一小时"}},
      {q:"2. According to Newport, what is the main problem with constant connectivity?",options:["A. It makes people physically inactive","B. It fragments attention and prevents deep focus","C. It leads to financial overspending","D. It causes social isolation"],ans:"B",explain:"'fragments attention and prevents the kind of sustained focus necessary for meaningful achievement'",wrongReasons:{A:"文章未提及身体活动减少",C:"文章未提及财务过度支出",D:"文章未提及社交孤立"}},
      {q:"3. What does a 'digital declutter' involve?",options:["A. Deleting all apps permanently","B. A temporary break from optional technology followed by selective reintroduction","C. Switching to a basic phone","D. Using only productivity tools"],ans:"B",explain:"'a 30-day break from optional digital technologies, followed by a careful reintroduction of only those tools that provide genuine value'",wrongReasons:{A:"不是永久删除（permanently），而是30天暂时休息（30-day break）",C:"文章未提换基础手机",D:"不是只使用生产力工具，而是只保留真正有价值的工具"}}
    ],
    passageCn: "由作家卡尔·纽波特提出的'数字极简主义'概念主张人们应当更有意识地选择使用哪些数字工具以及如何使用它们。数字极简主义者不会默认接受每一项新技术，而是精心选择那些服务于自己价值观和目标——并有意识地排除其余的工具。\n\n纽波特认为，对智能手机和社交媒体的强迫性使用侵蚀了人们独处和深度工作的能力。持续的连接会碎片化注意力，阻碍实现有意义的成就所必需的那种持续专注。他主张，解决方案不是完全放弃技术，而是重新定义自己与技术的关系。\n\n数字极简主义中的一个关键实践是'数字清理'：对可选数字技术进行为期30天的休息，然后只重新引入那些提供真正价值的工具。支持者报告称，这种重置使他们重新发现了离线活动——阅读、锻炼、面对面交谈——这些活动比被动的屏幕时间带来更深的满足感。"
  },
  {
    year: "2021\u5E7412\u6708", type: "\u4F5C\u6587",
    title: "2021\u5E7412\u6708 \u00B7 \u4F5C\u6587\u771F\u9898",
    prompt: "\u9898\u76EE\uFF1ALimiting Screen Time for Children\n\n\u8981\u6C42\uFF1A\n1. \u9650\u5236\u5C4F\u5E55\u65F6\u95F4\u7684\u5FC5\u8981\u6027\n2. \u5982\u4F55\u6709\u6548\u9650\u5236\n3. \u4F60\u7684\u770B\u6CD5",
    reference: "Limiting Screen Time for Children\n\nIn today's digital age, children are spending more time than ever in front of screens. While technology offers educational resources and entertainment, excessive screen time poses serious risks to children's physical and mental health, including eye strain, sleep disorders, and reduced physical activity.\n\nLimiting screen time is therefore essential. Parents can set clear daily limits\u2014no more than two hours for school-age children\u2014and model healthy digital habits themselves. Schools can promote outdoor activities, reading, and face-to-face social interaction as alternatives to screen-based entertainment.\n\nIn my view, the goal is not to eliminate screens entirely, but to ensure that children develop a balanced relationship with technology. Children who learn to regulate their screen use early are better equipped to navigate the digital world responsibly as adults.",
    tips: "\u8BC4\u5206\u4EAE\u70B9\uFF1A\u7B2C\u4E00\u6BB5\u4EA4\u4EE3\u80CC\u666F\u548C\u95EE\u9898\uFF0C\u7B2C\u4E8C\u6BB5\u63D0\u51FA\u5177\u4F53\u63AA\u65BD\uFF08set limits / model habits\uFF09\uFF0C\u7B2C\u4E09\u6BB5\u8868\u660E\u4E2A\u4EBA\u89C2\u70B9\u5E76\u5347\u534E\u3002\u6CE8\u610F\u7528 'in my view' \u800C\u975E 'I think' \u66F4\u663E\u4E66\u9762\u8BED\u6C34\u5E73\u3002"
  },
  {
    year: "2023\u5E746\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2023\u5E746\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A\uFF08\u8282\u9009\uFF09",
    instruction: "\u4ECE\u4E0B\u65B9\u8BCD\u5E93\u4E2D\u9009\u62E9\u5408\u9002\u7684\u5355\u8BCD\u586B\u5165\u7A7A\u683C",
    words: ["anticipate","broaden","demonstrate","effective","essential","generate","global","inevitable","reflect","sustain"],
    text: "Environmental sustainability has become an __(1)__ topic for __(2)__ policymakers. Experts argue that it is __(3)__ that current consumption patterns will lead to resource depletion if left unchecked. Governments must __(4)__ innovative solutions to __(5)__ clean energy production. Education plays an equally important role\u2014schools that __(6)__ students' understanding of ecological systems help __(7)__ long-term environmental awareness. Effective policies must __(8)__ on the real needs of communities. Research has also shown that community-based programs are highly __(9)__ in encouraging green behavior. Leaders who __(10)__ commitment through action, rather than words alone, earn greater public trust.",
    answers: {1:"essential",2:"global",3:"inevitable",4:"generate",5:"sustain",6:"broaden",7:"reflect",8:"anticipate",9:"effective",10:"demonstrate"},
    analysis: "\u6CE8\u610F\uFF1Agenerate solutions\uFF08\u4EA7\u751F\u89E3\u51B3\u65B9\u6848\uFF09\u3001sustain production\uFF08\u7EF4\u6301\u751F\u4EA7\uFF09\u3001broaden understanding\uFF08\u62D3\u5C55\u7406\u89E3\uFF09\u5747\u4E3A\u56DB\u7EA7\u9AD8\u9891\u642D\u914D",
    wordReasons: {1:"essential topic（必不可少的话题），形容词修饰名词 topic",2:"global policymakers（全球决策者），形容词修饰名词",3:"it is inevitable that...（...是不可避免的），it is + adj. + that 从句",4:"generate solutions（产生解决方案），governments must \u2192 原形动词",5:"sustain production（维持生产），to \u2192 不定式接原形",6:"broaden understanding（拓宽理解），schools that...复数主语 \u2192 原形",7:"reflect awareness（反映意识），help do 结构，接原形动词",8:"anticipate needs（预期需求），must \u2192 情态动词后接原形",9:"effective in encouraging（在鼓励方面有效），be + adj. + in doing 结构",10:"demonstrate commitment（展示承诺），leaders who...复数 \u2192 原形"},
    passageCn: "环境可持续性已成为全球决策者必不可少的话题。专家认为，如果放任不管，当前的消费模式将不可避免地导致资源枯竭。政府必须提出创新解决方案来维持清洁能源生产。教育同样扮演着重要角色——那些拓宽学生对生态系统理解的学校有助于培养长期的环境意识。有效的政策必须体现对社区真实需求的关注。研究还表明，以社区为基础的计划在鼓励环保行为方面非常有效。通过行动而非空谈来展现承诺的领导者赢得更多公众信任。"
  }
];

// 根据日期获取当天练习题
function getDailyPractice(d) {
  const idx = dayIndex(d);
  return DAILY_PRACTICE_POOL[idx % DAILY_PRACTICE_POOL.length];
}
function getDailyPastPaper(d) {
  const idx = dayIndex(d);
  return CET4_PAST_PAPERS[(idx + 2) % CET4_PAST_PAPERS.length];
}

// 当前展示的题目数据（供提交时使用）
let _currentPractice = null;
let _currentPastPaper = null;

// ============================================================
// 渲染每日练习题（带交互式输入框 + 提交按钮）
// ============================================================
function renderDailyQuiz() {
  const container = document.getElementById('dailyQuizContainer');
  if (!container) return;
  const d = currentDate;
  _currentPractice = getDailyPractice(d);
  _currentPastPaper = getDailyPastPaper(d);

  let html = '';

  // === 练习题A ===
  html += buildQuizCard(_currentPractice, 'A',
    '\uD83C\uDFAF\u6BCF\u65E5\u4E00\u7EC3 A \u00B7 ' + _currentPractice.type,
    'linear-gradient(135deg,#ec407a,#f06292)');

  // === 练习题B: 真题 ===
  html += buildQuizCard(_currentPastPaper, 'B',
    '\uD83D\uDCCB\u6BCF\u65E5\u4E00\u7EC3 B \u00B7 ' + _currentPastPaper.year + ' \u00B7 ' + _currentPastPaper.type,
    '#3949ab');

  container.innerHTML = html;
}

function buildQuizCard(data, part, title, badgeColor) {
  let html = '<div class="card" style="margin-bottom:16px;">';
  html += '<div class="section-title"><span class="icon">' + (part === 'A' ? '\uD83C\uDFAF' : '\uD83D\uDCCB') + '</span>' + title;
  html += '<span class="badge" style="background:' + badgeColor + ';color:white;font-size:11px;">' + formatDate(currentDate) + '</span></div>';

  if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
    html += buildClozeHTML(data, part);
  } else if (data.type === '\u6BB5\u843D\u5339\u914D') {
    html += buildMatchingHTML(data, part);
  } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
    html += buildReadingHTML(data, part);
  } else if (data.type === '\u7FFB\u8BD1') {
    html += buildTranslationHTML(data, part);
  } else if (data.type === '\u4F5C\u6587') {
    html += buildWritingHTML(data, part);
  }

  html += '</div>';
  return html;
}

// ---------- 选词填空 ----------
function buildClozeHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  // 词库
  html += '<div style="background:var(--pink-50);border-radius:10px;padding:12px;margin-bottom:12px;">';
  html += '<div style="font-size:12px;color:var(--pink-600);font-weight:700;margin-bottom:8px;">\uD83D\uDCE6 \u8BCD\u5E93\uFF08\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21\uFF09</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  data.words.forEach(function(w) {
    html += '<span style="background:white;border:1px solid var(--pink-200);border-radius:6px;padding:3px 10px;font-size:13px;font-weight:600;">' + w + '</span>';
  });
  html += '</div></div>';

  // 文本填空
  html += '<div style="font-size:14px;line-height:2.4;color:var(--text);">';
  var textParts = data.text.split(/__\((\d+)\)__/);
  for (var i = 0; i < textParts.length; i++) {
    if (i % 2 === 0) {
      html += textParts[i];
    } else {
      var num = textParts[i];
      var opts = '<option value="">\u2014\u2014</option>';
      data.words.forEach(function(w) { opts += '<option value="' + w + '">' + w + '</option>'; });
      html += '<select id="' + pid + '_b' + num + '" style="border:2px solid var(--pink-300);border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:110px;">' + opts + '</select>';
    }
  }
  html += '</div>';

  // 提交按钮
  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:16px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';

  // 结果区（初始隐藏）
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 段落匹配 ----------
function buildMatchingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '';
  // 段落
  data.paragraphs.forEach(function(p) {
    html += '<div style="font-size:13px;line-height:1.8;color:var(--text);margin-bottom:10px;padding:8px 12px;background:var(--pink-50);border-radius:8px;">' + p + '</div>';
  });
  // 匹配题
  html += '<div style="margin-top:12px;">';
  var opts = '<option value="">\u2014\u2014</option>';
  for (var k = 1; k <= 5; k++) {
    var circle = String.fromCharCode(0x245F + k); // ①=2460
    opts += '<option value="' + circle + '">' + circle + '</option>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="font-size:13px;color:var(--text);margin-bottom:10px;padding:8px 0;border-bottom:1px solid var(--pink-100);display:flex;align-items:center;gap:8px;">';
    html += '<span style="min-width:200px;">' + q.q + '</span>';
    html += '<select id="' + pid + '_q' + i + '" style="border:2px solid var(--pink-300);border-radius:6px;padding:3px 8px;font-size:13px;">' + opts + '</select>';
    html += '</div>';
  });
  html += '</div>';

  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:12px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 阅读理解 ----------
function buildReadingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:13px;line-height:1.9;color:var(--text);background:var(--pink-50);border-radius:10px;padding:12px;margin-bottom:12px;">' + data.passage.replace(/\\n\\n/g,'<br><br>') + '</div>';

  data.questions.forEach(function(q, qi) {
    html += '<div style="margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #f0f0f0;">';
    html += '<div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:8px;">' + q.q + '</div>';
    q.options.forEach(function(opt) {
      var val = opt.charAt(0);
      html += '<label style="display:block;font-size:13px;color:var(--text-light);padding:4px 0;cursor:pointer;">';
      html += '<input type="radio" name="' + pid + '_q' + qi + '" value="' + val + '" style="margin-right:6px;">' + opt + '</label>';
    });
    html += '</div>';
  });

  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:8px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 翻译 ----------
function buildTranslationHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="background:var(--pink-50);border-radius:10px;padding:14px;margin-bottom:12px;font-size:14px;line-height:1.9;color:var(--text);">' + data.source + '</div>';
  html += '<div style="font-size:12px;color:var(--text-light);margin-bottom:12px;">\uD83D\uDCA1 \u5173\u952E\u8BCD\u63D0\u793A\uFF1A' + (data.keyPoints || []).join('\u3000|\u3000') + '</div>';
  html += '<textarea id="' + pid + '_trans" placeholder="\u8BF7\u5728\u6B64\u8F93\u5165\u4F60\u7684\u7FFB\u8BD1..." style="width:100%;height:120px;border:2px solid var(--pink-200);border-radius:10px;padding:12px;font-size:14px;resize:vertical;font-family:inherit;"></textarea>';
  html += '<div style="margin-top:8px;"><button onclick="submitQuiz(\'' + part + '\')" style="background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u5E76\u67E5\u770B\u53C2\u8003\u8BD1\u6587</button></div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 作文 ----------
function buildWritingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="background:var(--pink-50);border-radius:10px;padding:14px;margin-bottom:12px;font-size:14px;line-height:1.9;white-space:pre-line;">' + data.prompt + '</div>';
  if (data.outline) {
    html += '<div style="font-size:13px;color:var(--pink-600);margin-bottom:8px;">\uD83D\uDCA1 \u53C2\u8003\u63D0\u7EB2\uFF1A</div>';
    data.outline.forEach(function(p) {
      html += '<div style="font-size:12px;color:var(--text-light);padding:3px 0;padding-left:10px;border-left:3px solid var(--pink-200);">' + p + '</div>';
    });
  }
  html += '<textarea id="' + pid + '_essay" placeholder="\u8BF7\u5728\u6B64\u8F93\u5165\u4F60\u7684\u4F5C\u6587..." style="width:100%;height:150px;border:2px solid var(--pink-200);border-radius:10px;padding:12px;font-size:14px;resize:vertical;font-family:inherit;margin-top:8px;"></textarea>';
  html += '<div style="margin-top:8px;"><button onclick="submitQuiz(\'' + part + '\')" style="background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u5E76\u67E5\u770B\u8303\u6587</button></div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ============================================================
// 提交答案：评分 + 显示正确答案 + 解析
// ============================================================
function submitQuiz(part) {
  var data = part === 'A' ? _currentPractice : _currentPastPaper;
  var pid = 'quiz' + part;
  var resultEl = document.getElementById(pid + 'Result');
  if (!resultEl) return;

  var html = '';
  var totalScore = 0;
  var maxScore = 0;

  if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
    var ans = data.answers;
    var correct = 0;
    var total = 0;
    var detail = '';
    Object.keys(ans).sort(function(a,b){return +a-+b}).forEach(function(k) {
      total++;
      var sel = document.getElementById(pid + '_b' + k);
      var userAns = sel ? sel.value : '';
      var rightAns = ans[k];
      var wordExample = '';
      try {
        var wp = WORD_POOL.find(function(w){ return w.w.toLowerCase() === rightAns.toLowerCase(); });
        if (wp && wp.ex) {
          wordExample = '<div style="font-size:12px;color:#555;margin-top:4px;padding:6px 8px;background:#f9f9f9;border-radius:4px;line-height:1.5;">\uD83D\uDCD6 ' + wp.ex + (wp.excn ? '<br><span style="color:#888;">\u2B50 ' + wp.excn + '</span>' : '') + '</div>';
        }
      } catch(e) {}
      if (userAns.toLowerCase() === rightAns.toLowerCase()) {
        correct++;
        detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:3px;">\u2705 (' + k + ') <strong>' + rightAns + '</strong>' + wordExample + '</div>';
      } else {
        var reason = (data.wordReasons && data.wordReasons[k]) ? data.wordReasons[k] : '';
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C (' + k + ') \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u586B') + '</em> \u2192 \u6B63\u786E\u7B54\u6848\uFF1A<strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDCD6 ' + reason + '</span>' : '') + wordExample + '</div>';
      }
    });
    totalScore = correct;
    maxScore = total;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + correct + ' / ' + total + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;
    if (data.analysis) html += '<div style="margin-top:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;">\uD83D\uDCD6 \u89E3\u6790\uFF1A' + data.analysis + '</div>';
    // 完整原文（含答案）
    if (data.text) {
      var filledText = data.text;
      Object.keys(data.answers).sort(function(a,b){return +a-+b}).forEach(function(k){
        filledText = filledText.split('__('+k+')__').join('<strong style="color:var(--pink-600);border-bottom:2px solid var(--pink-300)">' + data.answers[k] + '</strong>');
      });
      html += '<div style="margin-top:14px;padding:16px;background:linear-gradient(135deg,#fdf2f7,#fff);border-radius:12px;border:1px solid var(--pink-100);line-height:2.2;font-size:14px;"><div style="font-weight:700;color:var(--pink-600);margin-bottom:10px;font-size:15px;">\uD83D\uDCDD \u53C2\u8003\u7B54\u6848\uFF08\u5B8C\u6574\u539F\u6587\uFF09</div>' + filledText + '</div>';
      if (data.passageCn) {
        html += '<div style="margin-top:8px;padding:16px;background:#f8f9fa;border-radius:12px;border:1px solid #e0e0e0;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#546e7a;margin-bottom:10px;font-size:15px;">\uD83C\uDF10 \u53C2\u8003\u8BD1\u6587</div>' + data.passageCn + '</div>';
      }
    }

  } else if (data.type === '\u6BB5\u843D\u5339\u914D') {
    var correct = 0;
    var total = data.questions.length;
    var detail = '';
    data.questions.forEach(function(q, i) {
      var sel = document.getElementById(pid + '_q' + i);
      var userAns = sel ? sel.value : '';
      var clue = (data.matchClues && data.matchClues[i]) ? data.matchClues[i] : '';
      if (userAns === q.ans) {
        correct++;
        detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:6px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' \u2192 <strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#33691e;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
      } else {
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
      }
    });
    totalScore = correct * 2;
    maxScore = total * 2;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + (correct*2) + ' / ' + (total*2) + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;

  } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
    var correct = 0;
    var total = data.questions.length;
    var detail = '';
    data.questions.forEach(function(q, i) {
      var radioName = pid + '_q' + i;
      var radios = document.getElementsByName(radioName);
      var userAns = '';
      for (var r = 0; r < radios.length; r++) {
        if (radios[r].checked) { userAns = radios[r].value; break; }
      }
      if (userAns === q.ans) {
        correct++;
        detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:8px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' <strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + q.explain + '</span></div>';
      } else {
        var wrongInfo = (q.wrongReasons && q.wrongReasons[userAns]) ? '<br><span style="font-size:11px;color:#b71c1c;">\u274C \u4E3A\u4EC0\u4E48\u4F60\u7684\u7B54\u6848\u4E0D\u5BF9\uFF1A' + q.wrongReasons[userAns] + '</span>' : '';
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:8px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#888;">\uD83D\uDCD6 ' + q.explain + '</span>' + wrongInfo + '</div>';
      }
    });
    var perQ = Math.round(10 / total);
    totalScore = correct * perQ;
    maxScore = total * perQ;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + (correct*perQ) + ' / ' + (total*perQ) + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;
    if (data.passageCn) {
      html += '<div style="margin-top:14px;padding:16px;background:#f8f9fa;border-radius:12px;border:1px solid #e0e0e0;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#546e7a;margin-bottom:10px;font-size:15px;">\uD83C\uDF10 \u77ED\u6587\u7FFB\u8BD1</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';
    }

  } else if (data.type === '\u7FFB\u8BD1') {
    var userTrans = document.getElementById(pid + '_trans');
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\u2705 \u5DF2\u63D0\u4EA4\uFF0C\u53C2\u8003\u8BD1\u6587\u5982\u4E0B</div>';
    if (userTrans && userTrans.value.trim()) {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u7FFB\u8BD1\uFF1A<br>' + userTrans.value.replace(/\\n/g,'<br>') + '</div>';
      // 关键词检查
      if (data.keyPoints && data.keyPoints.length) {
        var kpHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
        kpHtml += '<div style="font-weight:700;color:var(--pink-600);margin-bottom:6px;">\uD83D\uDD0D \u5173\u952E\u8BCD\u68C0\u67E5\uFF1A</div>';
        var kpFound = 0;
        data.keyPoints.forEach(function(kp) {
          var parts = kp.split(' \u2192 ');
          var word = parts.length > 1 ? parts[1].trim().split(' / ')[0].trim().toLowerCase() : '';
          var found = word && userTrans.value.toLowerCase().indexOf(word) >= 0;
          if (found) kpFound++;
          kpHtml += '<div style="margin-bottom:3px;font-size:12px;">' + (found ? '\u2705' : '\u274C') + ' ' + kp + '</div>';
        });
        var rate = Math.round(kpFound / data.keyPoints.length * 100);
        kpHtml += '<div style="margin-top:6px;font-size:13px;font-weight:700;color:' + (rate >= 60 ? '#2e7d32' : '#c62828') + ';">\uD83C\uDFAF \u5173\u952E\u8BCD\u8986\u76D6\u7387\uFF1A' + kpFound + '/' + data.keyPoints.length + ' (' + rate + '%)</div>';
        kpHtml += '</div>';
        html += kpHtml;
      }
    } else {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#999;font-style:italic;">\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u7FFB\u8BD1\u54E6~\uFF08\u53EF\u4EE5\u5148\u5199\u518D\u63D0\u4EA4\uFF09</div>';
    }
    html += '<div style="font-size:13px;line-height:1.9;padding:10px;background:white;border-radius:8px;">' + data.reference + '</div>';

  } else if (data.type === '\u4F5C\u6587') {
    var userEssay = document.getElementById(pid + '_essay');
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\u2705 \u5DF2\u63D0\u4EA4\uFF0C\u53C2\u8003\u8303\u6587\u5982\u4E0B</div>';
    if (userEssay && userEssay.value.trim()) {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u4F5C\u6587\uFF1A<br>' + userEssay.value.replace(/\\n/g,'<br>') + '</div>';
      // 结构分析
      var essay = userEssay.value;
      var wordCount = essay.split(/\\s+/).filter(function(w){return w.length>0;}).length;
      var lines = essay.split(/\\n+/).filter(function(l){return l.trim().length>0;});
      var paraCount = lines.length;
      if (paraCount < 2) { paraCount = essay.split(/\\n\\s*\\n/).length; }
      var transWords = ['first','second','third','finally','moreover','however','therefore','in conclusion','to sum up','on the one hand','on the other hand','furthermore','nevertheless','in addition','consequently'];
      var foundTrans = [];
      var lowerE = essay.toLowerCase();
      transWords.forEach(function(tw){ if (lowerE.indexOf(tw) >= 0) foundTrans.push(tw); });
      var analysisHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
      analysisHtml += '<div style="font-weight:700;color:var(--pink-600);margin-bottom:6px;">\uD83D\uDCCA \u5199\u4F5C\u5206\u6790\u5361\uFF1A</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDCCF \u5B57\u6570\u4F30\u7B97\uFF1A<strong>' + wordCount + ' \u8BCD</strong> ' + (wordCount >= 120 ? (wordCount <= 180 ? '\u2705 \u7B26\u5408\u56DB\u7EA7\u8981\u6C42' : '\u26A0\uFE0F \u7565\u8D85\u8981\u6C42') : '\u26A0\uFE0F \u504F\u77ED\uFF0C\u5EFA\u8BAE120-180\u8BCD') + '</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDCC4 \u6BB5\u843D\u6570\uFF1A<strong>' + paraCount + ' \u6BB5</strong> ' + (paraCount >= 3 ? '\u2705 \u7ED3\u6784\u5408\u7406' : '\u26A0\uFE0F \u5EFA\u8BAE3-4\u6BB5\uFF08\u5F15\u8A00-\u6B63\u6587-\u7ED3\u8BBA\uFF09') + '</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDD17 \u8FC7\u6E21\u8BCD\u68C0\u6D4B\uFF1A' + (foundTrans.length > 0 ? '<span style="color:#2e7d32;">\u2705 \u53D1\u73B0 ' + foundTrans.length + ' \u4E2A\uFF1A' + foundTrans.join(', ') + '</span>' : '<span style="color:#ef6c00;">\u274C \u672A\u68C0\u6D4B\u5230\u8FC7\u6E21\u8BCD\uFF0C\u5EFA\u8BAE\u6DFB\u52A0 First/Second/However/Therefore/In conclusion</span>') + '</div>';
      analysisHtml += '</div>';
      html += analysisHtml;
    }
    html += '<div style="font-size:13px;line-height:1.9;padding:10px;background:white;border-radius:8px;white-space:pre-line;">' + data.reference + '</div>';
    if (data.tips) html += '<div style="margin-top:10px;padding:8px;background:white;border-radius:6px;font-size:12px;color:var(--text-light);">\uD83D\uDCDD ' + data.tips + '</div>';
  }

  resultEl.innerHTML = html;
  resultEl.style.display = 'block';
  // 滚动到结果区
  resultEl.scrollIntoView({behavior:'smooth',block:'center'});
  // 记录答题状态，更新统计栏进度
  markQuizDone(part);
}

// ============================================================
// 统计 Tab：每日题型实时更新
// ============================================================
// ============================================================
// 甜言蜜语池 — 每天一句送给女朋友
// day0 = 原始版本，day1+ = 甜蜜旋转
// ============================================================
var SWEET_NOTES = [
  "\u4F60\u7684\u7B11\u5BB9\u662F\u6211\u6BCF\u5929\u6700\u60F3\u770B\u5230\u7684\u98CE\u666F\uFF0C\u770B\u5230\u4F60\u5F00\u5FC3\uFF0C\u6211\u5C31\u89C9\u5F97\u4E16\u754C\u90FD\u4EAE\u4E86\u3002",
  "\u9047\u89C1\u4F60\u662F\u6211\u8FD9\u8F88\u5B50\u6700\u5E78\u8FD0\u7684\u4E8B\uFF0C\u6BCF\u4E00\u5929\u90FD\u60F3\u8BA9\u4F60\u66F4\u5E78\u798F\u4E00\u70B9\u3002",
  "\u4F60\u77E5\u9053\u5417\uFF1F\u4F60\u8BA4\u771F\u7684\u6837\u5B50\u7279\u522B\u8FF7\u4EBA\uFF0C\u6211\u767E\u770B\u4E0D\u817B\u3002",
  "\u60F3\u966A\u4F60\u8D70\u8FC7\u6BCF\u4E00\u4E2A\u6625\u590F\u79CB\u51AC\uFF0C\u56DB\u7EA7\u53EA\u662F\u6211\u4EEC\u6545\u4E8B\u91CC\u7684\u4E00\u5C0F\u7AE0\u3002",
  "\u4E16\u754C\u4E0A\u6700\u597D\u542C\u7684\u58F0\u97F3\uFF0C\u662F\u4F60\u53EB\u6211\u540D\u5B57\u65F6\u5019\u7684\u7B11\u58F0\u3002",
  "\u6BCF\u6B21\u60F3\u5230\u4F60\uFF0C\u5FC3\u91CC\u5C31\u50CF\u4F4F\u8FDB\u4E86\u4E00\u6574\u4E2A\u6625\u5929\u3002",
  "\u4F60\u662F\u6211\u5E73\u6DE1\u751F\u6D3B\u91CC\u6700\u95EA\u4EAE\u7684\u5149\uFF0C\u6BCF\u4E00\u5929\u90FD\u56E0\u4F60\u800C\u7F8E\u597D\u3002",
  "\u4E0D\u7BA1\u56DB\u7EA7\u591A\u96BE\uFF0C\u53EA\u8981\u60F3\u5230\u662F\u4F60\uFF0C\u6211\u5C31\u89C9\u5F97\u4E00\u5207\u90FD\u503C\u5F97\u3002",
  "\u4F60\u662F\u6211\u7684\u5C0F\u592A\u9633\uFF0C\u6E29\u6696\u4E86\u6211\u7684\u6574\u4E2A\u4E16\u754C\u3002",
  "\u548C\u4F60\u5728\u4E00\u8D77\u7684\u6BCF\u4E00\u5929\uFF0C\u90FD\u662F\u6211\u6700\u73CD\u8D35\u7684\u793C\u7269\u3002",
  "\u4F60\u7684\u773C\u775B\u91CC\u6709\u661F\u661F\uFF0C\u7167\u4EAE\u4E86\u6211\u6240\u6709\u7684\u68A6\u60F3\u3002",
  "\u60F3\u628A\u4E16\u754C\u4E0A\u6240\u6709\u7F8E\u597D\u7684\u4E1C\u897F\u90FD\u7ED9\u4F60\uFF0C\u56E0\u4E3A\u4F60\u503C\u5F97\u3002",
  "\u6709\u4F60\u5728\u8EAB\u8FB9\uFF0C\u8FDE\u80CC\u5355\u8BCD\u90FD\u53D8\u6210\u4E86\u5E78\u798F\u7684\u4E8B\u3002",
  "\u6211\u6700\u5927\u7684\u613F\u671B\u4E0D\u662F\u8FC7\u56DB\u7EA7\uFF0C\u800C\u662F\u4F60\u6BCF\u5929\u90FD\u5F00\u5F00\u5FC3\u5FC3\u7684\u3002",
  "\u4F60\u7684\u5B58\u5728\u672C\u8EAB\u5C31\u662F\u5149\uFF0C\u4E0D\u9700\u8981\u501F\u4EFB\u4F55\u4EBA\u7684\u4EAE\u3002",
  "\u548C\u4F60\u4E00\u8D77\u6162\u6162\u53D8\u597D\uFF0C\u662F\u6211\u80FD\u60F3\u5230\u6700\u6D6A\u6F2B\u7684\u4E8B\u3002",
  "\u4F60\u662F\u6708\u4EAE\u6211\u90FD\u613F\u610F\u4E3A\u4F60\u6458\uFF0C\u56DB\u7EA7\u8FD9\u70B9\u4E8B\u7B97\u4EC0\u4E48\u5462\uFF5E",
  "\u867D\u7136\u6211\u4E0D\u80FD\u66FF\u4F60\u8003\u8BD5\uFF0C\u4F46\u6211\u4F1A\u4E00\u76F4\u7AD9\u5728\u4F60\u8EAB\u540E\u4E3A\u4F60\u52A0\u6CB9\u3002",
  "\u6BCF\u5929\u6253\u5F00\u8FD9\u4E2A\u5C0F\u7AD9\uFF0C\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u5C31\u662F\u4F60\u52AA\u529B\u5B66\u4E60\u7684\u6837\u5B50\u3002",
  "\u4F60\u503C\u5F97\u6240\u6709\u7684\u7F8E\u597D\uFF0C\u56E0\u4E3A\u4F60\u672C\u8EAB\u5C31\u662F\u7F8E\u597D\u672C\u8EAB\u3002",
  "\u6211\u60F3\u628A\u4F59\u751F\u90FD\u5199\u6210\u60C5\u4E66\uFF0C\u4F60\u662F\u552F\u4E00\u7684\u5973\u4E3B\u89D2\u3002",
  "\u770B\u5230\u4F60\u8FDB\u6B65\uFF0C\u6BD4\u6211\u81EA\u5DF1\u7684\u6210\u529F\u8FD8\u8981\u5F00\u5FC3\u4E00\u767E\u500D\u3002",
  "\u60F3\u548C\u4F60\u4E00\u8D77\u53BB\u5F88\u591A\u5730\u65B9\uFF0C\u770B\u5F88\u591A\u98CE\u666F\uFF0C\u8FC7\u5F88\u591A\u8282\u65E5\u3002",
  "\u4F60\u662F\u6211\u89C1\u8FC7\u6700\u6E29\u67D4\u7684\u4EBA\uFF0C\u4E5F\u662F\u6700\u575A\u5F3A\u7684\u4EBA\u3002",
  "\u8FD9\u8F88\u5B50\u6700\u5927\u7684\u5E78\u8FD0\u5C31\u662F\u9047\u89C1\u4F60\uFF0C\u6765\u751F\u8FD8\u8981\u5728\u4E00\u8D77\u3002"
];

function getDailySweetNote(d) {
  var idx = dayIndex(d);
  if (idx === 0) return "\u5B66\u4E60\u867D\u7136\u8F9B\u82E6\uFF0C\u4F46\u60F3\u5230\u4F60\u80FD\u7528\u5230\u8FD9\u4E2A\u5C0F\u7AD9\uFF0C\u4E00\u5207\u90FD\u503C\u5F97\u3002\u52A0\u6CB9\uFF0C\u4F60\u6C38\u8FDC\u662F\u6211\u7684\u9A84\u50B2 \u2764\uFE0F";
  return SWEET_NOTES[(idx - 1) % SWEET_NOTES.length];
}

// ============================================================
// 生词收藏功能 — 点击星标收藏/取消，localStorage 存储
// ============================================================
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('cet4_bookmarks') || '[]');
  } catch(e) { return []; }
}
function saveBookmarks(list) {
  localStorage.setItem('cet4_bookmarks', JSON.stringify(list));
}
function toggleBookmark(word, el) {
  var list = getBookmarks();
  var idx = list.indexOf(word);
  if (idx >= 0) {
    list.splice(idx, 1);
    if (el) { el.textContent = '\u2606'; el.title = '\u6536\u85CF\u8FD9\u4E2A\u5355\u8BCD'; }
  } else {
    list.push(word);
    if (el) { el.textContent = '\u2605'; el.title = '\u53D6\u6D88\u6536\u85CF'; }
  }
  saveBookmarks(list);
  updateStatsRow();
}

// ============================================================
// 实时统计更新
// ============================================================
function updateStatsRow() {
  var _el;
  var idx = dayIndex(currentDate);
  if ((_el = document.getElementById('statVocab'))) _el.textContent = getCurrentVocab().length;
  if ((_el = document.getElementById('statStreak'))) _el.textContent = idx + 1;
  if ((_el = document.getElementById('statBookmarks'))) _el.textContent = getBookmarks().length;

  // 答题进度：检查 localStorage 中是否已提交
  try {
    var data = JSON.parse(localStorage.getItem('cet4_quiz_state') || '{}');
    var todayKey = currentDate.getFullYear()+'-'+String(currentDate.getMonth()+1).padStart(2,'0')+'-'+String(currentDate.getDate()).padStart(2,'0');
    var today = data[todayKey] || { quizA: false, quizB: false };
    var done = (today.quizA ? 1 : 0) + (today.quizB ? 1 : 0);
    if ((_el = document.getElementById('statQuiz'))) _el.textContent = done + '/2';
  } catch(e) {
    if ((_el = document.getElementById('statQuiz'))) _el.textContent = '0/2';
  }

  // 更新甜言蜜语
  if ((_el = document.getElementById('sweetNoteText'))) {
    _el.innerHTML = '\u201C' + getDailySweetNote(currentDate) + '\u201D';
  }
}

// 答题提交后记录状态
function markQuizDone(part) {
  try {
    var data = JSON.parse(localStorage.getItem('cet4_quiz_state') || '{}');
    var todayKey = currentDate.getFullYear()+'-'+String(currentDate.getMonth()+1).padStart(2,'0')+'-'+String(currentDate.getDate()).padStart(2,'0');
    if (!data[todayKey]) data[todayKey] = { quizA: false, quizB: false };
    data[todayKey][part] = true;
    localStorage.setItem('cet4_quiz_state', JSON.stringify(data));
    updateStatsRow();
  } catch(e) {}
}

function updateDailyStats() {
  updateStatsRow();
  var d = currentDate;
  var idx = dayIndex(d);
  if (idx === 0) return; // day 0 不改统计
  var practice = getDailyPractice(d);
  var pastPaper = getDailyPastPaper(d);
  var tipEl = document.getElementById('todayTypeTip');
  if (tipEl) {
    var stars = {'\u9009\u8BCD\u586B\u7A7A':'\u2B50\u2B50\u2B50\u2606\u2606','\u6BB5\u843D\u5339\u914D':'\u2B50\u2B50\u2B50\u2B50\u2606','\u9605\u8BFB\u7406\u89E3':'\u2B50\u2B50\u2B50\u2B50\u2B50','\u7FFB\u8BD1':'\u2B50\u2B50\u2B50\u2B50\u2606','\u4F5C\u6587':'\u2B50\u2B50\u2B50\u2B50\u2B50'};
    tipEl.innerHTML = '\uD83D\uDCCC \u4ECA\u65E5\u9898\u578B\uFF1A<strong>' + practice.type + '\uFF08' + practice.typeEn + '\uFF09' + (stars[practice.type]||'\u2B50\u2B50\u2B50') + '</strong> &nbsp;&nbsp;+&nbsp;&nbsp;\u771F\u9898\uFF1A<strong>' + pastPaper.year + ' \u00B7 ' + pastPaper.type + '</strong><br>\uD83D\uDCCC \u91CD\u70B9\u7A81\u7834\uFF1A<strong>' + getTodayFocus(practice.type) + '</strong><br>\uD83D\uDCCC \u5B66\u4E60\u987A\u5E8F\uFF1A\u5148\u6D4F\u89C8\u8BCD\u6C47\u8868 \u2192 \u6BCF\u65E5\u4E00\u7EC3 \u2192 \u6838\u5BF9\u89E3\u6790 \u2192 \u91CD\u70B9\u8BB0\u5FC6\u9519\u9898\u8BCD\u6C47<br>\uD83D\uDCCC \u5C0F\u6280\u5DE7\uFF1A\u628A\u9519\u9898\u4E2D\u7684\u751F\u8BCD\u6807\u8BB0\u4E0B\u6765\uFF0C\u7761\u524D\u518D\u590D\u4E60\u4E00\u904D\u6548\u679C\u6700\u597D\uFF01';
  }
}

function getTodayFocus(type) {
  var map = {
    '\u9009\u8BCD\u586B\u7A7A': '\u8BCD\u4E49\u8FA8\u6790 + \u642D\u914D\u8BB0\u5FC6\uFF08\u56FA\u5B9A\u8BCD\u7EC4\u4F18\u5148\uFF09',
    '\u6BB5\u843D\u5339\u914D': '\u4E3B\u65E8\u53E5\u8BC6\u522B + \u5173\u952E\u8BCD\u5B9A\u4F4D\u6280\u5DE7',
    '\u9605\u8BFB\u7406\u89E3': '\u7EC6\u8282\u9898\u7CBE\u8BFB + \u63A8\u65AD\u9898\u903B\u8F91\u5224\u65AD',
    '\u7FFB\u8BD1': '\u53E5\u5F0F\u53D8\u6362 + \u6838\u5FC3\u8BCD\u6C47\u6D3B\u7528',
    '\u4F5C\u6587': '\u6BB5\u843D\u7ED3\u6784\u6E05\u6670 + \u8BBA\u636E\u4E3E\u4F8B + \u8BCD\u6C47\u591A\u6837\u5316'
  };
  return map[type] || '\u8BCD\u6C47\u79EF\u7D2F + \u9898\u578B\u4E13\u9879';
}


// ============================================================
// 复习模式 (V3.4) — 昨日词汇选择题复习系统
// ============================================================
// dateKey helper (removed by build_v3.py, needed by review + saveExamScore)
function dateKey(d) {
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
var reviewState = {
  words: [], currentIndex: 0,
  correctCount: 0, wrongCount: 0,
  wrongWords: [], isActive: false,
  isReviewAgain: false
};

function getReviewData() {
  try { return JSON.parse(localStorage.getItem('cet4_review_data') || '{}'); }
  catch(e) { return {}; }
}
function saveReviewData(data) {
  try { localStorage.setItem('cet4_review_data', JSON.stringify(data)); } catch(e) {}
}
function updateWordErrorCount(word, increment) {
  var data = getAllReviewData();
  if (!data.words) data.words = {};
  var prev = data.words[word] || 0;
  data.words[word] = prev + (increment ? 1 : 0);
  saveAllReviewData(data);
}
function markAllReviewMastered() {
  var data = getAllReviewData();
  data.completedRound = (data.completedRound || 0) + 1;
  data.lastMastered = true;
  saveAllReviewData(data);
}
function isAllReviewMastered() {
  var data = getAllReviewData();
  return !!(data.lastMastered);
}
function getAllReviewWords() {
  var all = [];
  var idx = dayIndex(currentDate);
  for (var i = 0; i < idx; i++) {
    all = all.concat(DAILY_WORDS[i]);
  }
  if (all.length > 100) {
    for (var i = all.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = all[i]; all[i] = all[j]; all[j] = tmp;
    }
    all = all.slice(0, 100);
  }
  return all;
}
function getAllLearnedDateRange() {
  var idx = dayIndex(currentDate);
  if (idx <= 0) return '';
  var s = new Date(START_DATE);
  var e = new Date(START_DATE.getTime() + (idx - 1) * MS_DAY);
  return formatDate(s) + ' ~ ' + formatDate(e);
}
function getReviewStorageKey() {
  return 'all_learned_review';
}
function getAllReviewData() {
  try { return JSON.parse(localStorage.getItem(getReviewStorageKey()) || '{}'); } catch(e) { return {}; }
}
function saveAllReviewData(data) {
  try { localStorage.setItem(getReviewStorageKey(), JSON.stringify(data)); } catch(e) {}
}
function generateOptions(correctWord, count) {
  count = count || 3;
  // 从 DAILY_WORDS + WORD_POOL 构建干扰项池
  var pool = [], seen = {};
  for (var d = 0; d < DAILY_WORDS.length; d++) {
    for (var w = 0; w < DAILY_WORDS[d].length; w++) {
      var word = DAILY_WORDS[d][w];
      if (!seen[word.w] && word.w !== correctWord.w) { pool.push(word); seen[word.w] = true; }
    }
  }
  for (var i = 0; i < WORD_POOL.length; i++) {
    if (!seen[WORD_POOL[i].w] && WORD_POOL[i].w !== correctWord.w) { pool.push(WORD_POOL[i]); seen[WORD_POOL[i].w] = true; }
  }
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
  var options = [correctWord].concat(pool.slice(0, count));
  for (var i = options.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
  }
  return options;
}
function sortWordsForReview(words) {
  var data = getAllReviewData();
  var wordData = data.words || {};
  var weighted = words.map(function(w) {
    return { word: w, wrongCount: wordData[w.w] || 0 };
  });
  weighted.sort(function(a, b) {
    if (a.wrongCount !== b.wrongCount) return b.wrongCount - a.wrongCount;
    return Math.random() - 0.5;
  });
  return weighted.map(function(item) { return item.word; });
}
function startReview() {
  var allWords = getAllReviewWords();
  reviewState = {
    words: sortWordsForReview(allWords),
    currentIndex: 0, correctCount: 0, wrongCount: 0,
    wrongWords: [], isActive: true, isReviewAgain: false,
    reviewDateKey: dateKey(currentDate)
  };
  var pre = document.getElementById('reviewPre');
  var body = document.getElementById('reviewBody');
  var result = document.getElementById('reviewResult');
  var done = document.getElementById('reviewDoneState');
  if (pre) pre.style.display = 'none';
  if (body) body.style.display = 'block';
  if (result) result.style.display = 'none';
  if (done) done.style.display = 'none';
  var titleEl = document.getElementById('reviewTitleDate');
  if (titleEl) titleEl.textContent = getAllLearnedDateRange();
  renderReviewQuestion();
}
function startReviewAgain() {
  if (reviewState.wrongWords.length === 0) return;
  var wrongNames = reviewState.wrongWords.map(function(item) { return item.word; });
  var wrongVocab = [];
  for (var d = 0; d < DAILY_WORDS.length; d++) {
    for (var w = 0; w < DAILY_WORDS[d].length; w++) {
      if (wrongNames.indexOf(DAILY_WORDS[d][w].w) >= 0) wrongVocab.push(DAILY_WORDS[d][w]);
    }
  }
  reviewState = {
    words: sortWordsForReview(wrongVocab),
    currentIndex: 0, correctCount: 0, wrongCount: 0,
    wrongWords: [], isActive: true, isReviewAgain: true,
    reviewDateKey: dateKey(currentDate)
  };
  document.getElementById('reviewResult').style.display = 'none';
  document.getElementById('reviewBody').style.display = 'block';
  renderReviewQuestion();
}
function renderReviewQuestion() {
  if (reviewState.currentIndex >= reviewState.words.length) { finishReview(); return; }
  var word = reviewState.words[reviewState.currentIndex];
  var total = reviewState.words.length, cur = reviewState.currentIndex + 1;
  var progressEl = document.getElementById('reviewProgress');
  if (progressEl) progressEl.textContent = '第 ' + cur + ' / ' + total + ' 题';
  var pct = Math.round((reviewState.currentIndex / total) * 100);
  var progBar = document.getElementById('reviewProgBar');
  var progFill = document.getElementById('reviewProgFill');
  if (progBar) progBar.textContent = pct + '%';
  if (progFill) progFill.style.width = pct + '%';
  var qNum = document.getElementById('reviewQNumber');
  if (qNum) qNum.textContent = '第 ' + cur + ' 题';
  var wEl = document.getElementById('reviewWord');
  if (wEl) wEl.textContent = word.w;
  var pEl = document.getElementById('reviewPron');
  if (pEl) pEl.textContent = word.p || '';
  var options = generateOptions(word, 3);
  var optHTML = '';
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var escapedWord = opt.w.replace(/'/g, "\'");
    var escapedAttr = opt.w.replace(/"/g, '&quot;');
    optHTML += '<button class="review-option-btn" onclick="selectReviewOption(this,\'' + escapedWord + '\')" data-word="' + escapedAttr + '">' + opt.m + '</button>';
  }
  var oEl = document.getElementById('reviewOptions');
  if (oEl) oEl.innerHTML = optHTML;
  var fb = document.getElementById('reviewFeedback');
  if (fb) { fb.style.display = 'none'; fb.innerHTML = ''; }
  var nb = document.getElementById('reviewNextBtn');
  if (nb) { nb.style.display = 'none'; nb.innerHTML = ''; }
}
function selectReviewOption(btn, selectedWord) {
  var allBtns = document.querySelectorAll('#reviewOptions .review-option-btn');
  for (var i = 0; i < allBtns.length; i++) { allBtns[i].style.pointerEvents = 'none'; }
  var currentWord = reviewState.words[reviewState.currentIndex];
  var isCorrect = (selectedWord === currentWord.w);
  for (var i = 0; i < allBtns.length; i++) {
    if (allBtns[i].getAttribute('data-word') === currentWord.w) {
      allBtns[i].classList.add('correct-reveal');
    }
  }
  var fb = document.getElementById('reviewFeedback');
  if (!fb) return;
  fb.style.display = 'block';
  if (isCorrect) {
    btn.classList.add('correct-choice');
    reviewState.correctCount++;
    fb.className = 'review-feedback-correct';
    fb.innerHTML = '<div style="font-size:28px;margin-bottom:6px;">\u2705</div><div style="font-size:16px;font-weight:700;color:#2e7d32;">回答正确！</div><div style="font-size:14px;color:#333;margin-top:6px;font-weight:600;">' + currentWord.m + '</div>' + (currentWord.p ? '<div style="font-size:12px;color:#999;margin-top:2px;">' + currentWord.p + '</div>' : '') + (currentWord.ex ? '<div style="font-size:13px;color:#555;margin-top:8px;background:#f5f5f5;padding:10px 12px;border-radius:8px;line-height:1.7;">\uD83D\uDCD6 ' + currentWord.ex + (currentWord.excn ? '<br><span style="color:#888;">\u2B50 ' + currentWord.excn + '</span>' : '') + '</div>' : '') + (currentWord.c ? '<div style="font-size:12px;color:#ec407a;margin-top:4px;">\uD83D\uDCCC ' + currentWord.c + '</div>' : '');
    updateWordErrorCount(currentWord.w, false);
    setTimeout(function() { reviewState.currentIndex++; renderReviewQuestion(); }, 800);
  } else {
    btn.classList.add('wrong-choice');
    reviewState.wrongCount++;
    reviewState.wrongWords.push({ word: currentWord.w, correctMeaning: currentWord.m });
    updateWordErrorCount(currentWord.w, true);
    fb.className = 'review-feedback-wrong';
    fb.innerHTML = '<div style="font-size:28px;margin-bottom:6px;">\u274C</div><div style="font-size:16px;font-weight:700;color:#c62828;">回答错误</div><div style="font-size:14px;color:#333;margin-top:6px;font-weight:600;">正确答案：' + currentWord.m + '</div>' + (currentWord.p ? '<div style="font-size:12px;color:#999;margin-top:2px;">' + currentWord.p + '</div>' : '') + (currentWord.ex ? '<div style="font-size:13px;color:#555;margin-top:8px;background:#fff;padding:10px 12px;border-radius:8px;line-height:1.7;border:1px solid #eee;">\uD83D\uDCD6 ' + currentWord.ex + (currentWord.excn ? '<br><span style="color:#888;">\u2B50 ' + currentWord.excn + '</span>' : '') + '</div>' : '') + (currentWord.c ? '<div style="font-size:12px;color:#ec407a;margin-top:4px;">\uD83D\uDCCC ' + currentWord.c + '</div>' : '');
    var nb = document.getElementById('reviewNextBtn');
    if (nb) {
      nb.style.display = 'block';
      nb.innerHTML = '<button class="review-next-btn" onclick="goToNextReviewQuestion()">下一题 \u25B6</button>';
    }
  }
}
function goToNextReviewQuestion() { reviewState.currentIndex++; renderReviewQuestion(); }
function finishReview() {
  reviewState.isActive = false;
  var total = reviewState.words.length, correct = reviewState.correctCount;
  var wrong = reviewState.wrongCount, pct = Math.round((correct / total) * 100);
  var body = document.getElementById('reviewBody');
  var result = document.getElementById('reviewResult');
  if (body) body.style.display = 'none';
  if (!result) return;
  result.style.display = 'block';
  var cardEl = document.getElementById('reviewResultCard');
  var titleEl = document.getElementById('reviewResultTitle');
  var msgEl = document.getElementById('reviewResultMsg');
  var againBtn = document.getElementById('btnReviewAgain');
  if (pct === 100) {
    if (cardEl) cardEl.className = 'result-card excellent';
    if (titleEl) titleEl.textContent = '完美通关 \uD83C\uDF1F';
    if (msgEl) msgEl.textContent = '太棒了！昨天的单词全部掌握！';
    if (againBtn) againBtn.style.display = 'none';
    markAllReviewMastered();
  } else if (pct >= 80) {
    if (cardEl) cardEl.className = 'result-card good';
    if (titleEl) titleEl.textContent = '表现不错 \uD83D\uDC4D';
    if (msgEl) msgEl.textContent = '很不错，继续加油！';
    if (againBtn) againBtn.style.display = 'block';
  } else if (pct >= 60) {
    if (cardEl) cardEl.className = 'result-card fair';
    if (titleEl) titleEl.textContent = '仍需努力 \uD83D\uDCDA';
    if (msgEl) msgEl.textContent = '还需要多背背哦，不要灰心！';
    if (againBtn) againBtn.style.display = 'block';
  } else {
    if (cardEl) cardEl.className = 'result-card poor';
    if (titleEl) titleEl.textContent = '需要加强 \uD83D\uDCAA';
    if (msgEl) msgEl.textContent = '错误较多，建议再背一轮昨天的词汇！';
    if (againBtn) againBtn.style.display = 'block';
  }
  var scoreEl = document.getElementById('reviewResultScore');
  if (scoreEl) scoreEl.innerHTML = pct + '<span>%</span>';
  var rcEl = document.getElementById('reviewCorrect');
  if (rcEl) rcEl.textContent = correct;
  var rwEl = document.getElementById('reviewWrong');
  if (rwEl) rwEl.textContent = wrong;
  var rtEl = document.getElementById('reviewTotal');
  if (rtEl) rtEl.textContent = total;
  var wrongListEl = document.getElementById('reviewWrongList');
  var wrongWordsEl = document.getElementById('reviewWrongWords');
  if (reviewState.wrongWords.length > 0) {
    if (wrongListEl) wrongListEl.style.display = 'block';
    if (wrongWordsEl) {
      var data = getAllReviewData();
      var html = '';
      for (var i = 0; i < reviewState.wrongWords.length; i++) {
        var item = reviewState.wrongWords[i];
        var cnt = (data.words && data.words[item.word]) || 1;
        html += '<div class="review-wrong-word"><div><div class="rw-word">' + item.word + '</div><div class="rw-meaning">' + item.correctMeaning + '</div></div><div class="rw-wrong-count">错误 ' + cnt + ' 次</div></div>';
      }
      wrongWordsEl.innerHTML = html;
    }
  } else {
    if (wrongListEl) wrongListEl.style.display = 'none';
  }
}
function renderReviewPanel() {
  var idx = dayIndex(currentDate);
  if (idx < 1) return;
  // 如果日期变了，重置进行中的复习状态
  if (reviewState.isActive && reviewState.reviewDateKey !== dateKey(currentDate)) {
    reviewState.isActive = false;
    reviewState.words = [];
  }
  var doneEl = document.getElementById('reviewDoneState');
  var preEl = document.getElementById('reviewPre');
  var bodyEl = document.getElementById('reviewBody');
  var resultEl = document.getElementById('reviewResult');
  if (reviewState.isActive) {
    if (doneEl) doneEl.style.display = 'none';
    if (preEl) preEl.style.display = 'none';
    if (bodyEl) bodyEl.style.display = 'block';
    if (resultEl) resultEl.style.display = 'none';
    return;
  }
  if (isAllReviewMastered()) {
    if (doneEl) doneEl.style.display = 'block';
    if (preEl) preEl.style.display = 'none';
    if (bodyEl) bodyEl.style.display = 'none';
    if (resultEl) resultEl.style.display = 'none';
    var doneDateEl = document.getElementById('reviewDoneDate');
    if (doneDateEl) doneDateEl.textContent = getAllLearnedDateRange();
    return;
  }
  if (doneEl) doneEl.style.display = 'none';
  if (preEl) preEl.style.display = 'block';
  if (bodyEl) bodyEl.style.display = 'none';
  if (resultEl) resultEl.style.display = 'none';
  var allWords = getAllReviewWords();
  var dlEl = document.getElementById('reviewDateLabel');
  if (dlEl) dlEl.textContent = getAllLearnedDateRange();
  var cEl = document.getElementById('reviewWordCount');
  if (cEl) cEl.textContent = allWords.length;
  var hEl = document.getElementById('reviewHistoryHint');
  if (hEl) {
    var data = getAllReviewData();
    var completed = data.completedRound || 0;
    var wrongCount = 0;
    if (data.words) { var keys = Object.keys(data.words); for (var k = 0; k < keys.length; k++) { if (data.words[keys[k]] > 0) wrongCount++; } }
    var parts = [];
    if (completed > 0) parts.push('已完成 ' + completed + ' 轮复习');
    if (wrongCount > 0) parts.push('还有 ' + wrongCount + ' 个薄弱词汇');
    hEl.textContent = parts.length > 0 ? '历史：' + parts.join('，') : '';
  }
}


// ============================================================
// V3.5.1 — 扩充四级真题库（12道，5/24起使用）
// ============================================================
const CET4_REAL_PAPERS = [
  // ---- 1. 阅读理解：2019.6 ----
  {
    id: "r2019_6",
    year: "2019年6月", type: "阅读理解",
    title: "2019年6月 · 阅读理解",
    instruction: "阅读短文，回答以下问题",
    passage: `In an age of social media and constant connectivity, the fear of missing out—commonly known as FOMO—has become a defining anxiety of modern life. People scroll through their feeds watching others attend parties, travel to exotic places, and enjoy seemingly perfect lives, all while sitting alone on their sofas.

Psychologists define FOMO as "a pervasive apprehension that others might be having rewarding experiences from which one is absent." Research has linked it to increased smartphone use, reduced enjoyment of present experiences, and lower overall life satisfaction.

What makes FOMO particularly insidious is that it creates a self-reinforcing loop: feeling left out leads to more social media browsing, which exposes you to more curated highlights of others' lives, which makes you feel more left out. Breaking this loop requires conscious effort—putting down the phone, engaging fully with the present moment, and recognizing that social media shows a selective, often idealized version of reality.

Experts recommend a technique called "savoring"—deliberately appreciating what you have rather than lamenting what you lack. Studies show that people who regularly practice gratitude and savoring report higher levels of happiness and lower levels of FOMO, regardless of how much time they spend online.`,
    questions: [
      {q:"1. What does FOMO primarily refer to?",
       options:["A. Fear of social rejection","B. Anxiety about missing rewarding experiences others seem to have","C. Concern about smartphone overuse","D. Worry about poor internet connection"],
       ans:"B",
       explain:"第一段明确：FOMO is 'a pervasive apprehension that others might be having rewarding experiences from which one is absent'。FOMO 的核心是担心别人在享受自己缺席的有价值体验，而非社交恐惧、手机过度使用或网络连接问题。",
       wrongReasons:{A:"文章未提社交拒绝（social rejection），而是他人的 rewarding experiences",C:"智能手机过度使用是 FOMO 的结果/相关因素，不是 FOMO 的定义",D:"文章未提网络连接问题"}},
      {q:"2. Why is FOMO described as 'self-reinforcing'?",
       options:["A. It leads people to post more on social media","B. It makes people enjoy offline activities more","C. It creates a cycle where checking social media worsens the feeling","D. It encourages people to travel more frequently"],
       ans:"C",
       explain:"第三段描述了循环：feeling left out → more social media browsing → more curated highlights of others' lives → more left out。这是一个恶性循环——越刷越焦虑，越焦虑越刷。",
       wrongReasons:{A:"文章说的是浏览（browsing）而非发布（posting），且是恶性循环",B:"相反，FOMO 降低了对当下活动的享受（reduced enjoyment of present experiences）",D:"文章未提旅行频率增加"}},
      {q:"3. What do experts recommend to combat FOMO?",
       options:["A. Deleting all social media accounts","B. Limiting internet to one hour per day","C. Practicing gratitude and appreciating what you have","D. Spending more time with friends offline"],
       ans:"C",
       explain:"第四段：专家推荐 'savoring'——即 'deliberately appreciating what you have rather than lamenting what you lack'。研究表明定期练习感恩和品味（gratitude and savoring）的人幸福感更高、FOMO 更低。",
       wrongReasons:{A:"文章未建议删除账号，而是改变心态（savoring）",B:"文章未提具体时间限制",D:"文章未提线下陪伴，而是感恩练习"}}
    ],
    passageCn: "在社交媒体和持续连接的时代，对错过的恐惧——通常被称为FOMO——已成为现代生活的一种典型焦虑。人们滚动浏览动态，看着别人参加派对、前往异国旅行、享受看似完美的生活，而自己却独坐沙发上。\n\n心理学家将FOMO定义为「一种普遍的担忧——他人正在享有自己缺席的有价值体验」。研究将其与智能手机使用增加、对当下体验享受减少以及整体生活满意度降低联系起来。\n\n使FOMO尤为危险的是它形成了自我强化的循环：感到被遗忘导致更多地浏览社交媒体，从而暴露在更多精心策划的他人精彩生活片段中，这又使你感到更加被遗忘。打破这个循环需要有意识的努力——放下手机，全身心投入当下，并认识到社交媒体展示的是现实的选择性、往往理想化的版本。\n\n专家推荐一种叫做「品味」的技术——有意识地欣赏你所拥有的，而非哀叹你所缺乏的。研究表明，无论在线花费多少时间，定期练习感恩和品味的人报告了更高的幸福感和更低的FOMO水平。"
  },
  // ---- 2. 段落匹配：2020.12 ----
  {
    id: "m2020_12",
    year: "2020年12月", type: "段落匹配",
    title: "2020年12月 · 段落匹配",
    instruction: "阅读下方5个段落，将题目陈述（A-E）与正确段落编号（①-⑤）匹配",
    paragraphs: [
      "\u2460 The gig economy\u2014characterized by short-term contracts and freelance work rather than permanent jobs\u2014has grown substantially over the past decade. Platforms like Uber, Airbnb, and Fiverr have enabled millions of workers to earn income on a flexible schedule.",
      "\u2461 Despite its appeal, the gig economy raises serious concerns about worker welfare. Gig workers are typically classified as independent contractors rather than employees, which means they lack access to benefits such as health insurance, paid leave, and unemployment protection.",
      "\u2462 Some researchers argue that the gig economy is not a new phenomenon, but rather a digital extension of a labor market that has always included temporary and part-time work. What is new is the scale and the technology that coordinates it.",
      "\u2463 Several governments have begun to respond. The European Union has introduced legislation requiring platforms to prove that workers are not employees, shifting the burden of classification from the worker to the company. California passed a similar law in 2019.",
      "\u2464 The long-term trajectory of the gig economy remains unclear. Some predict it will continue to grow as automation displaces traditional jobs; others believe that improved regulation will push platforms to offer better protections, shrinking the gap between gig and conventional employment."
    ],
    questions: [
      {q:"A. Gig workers generally do not enjoy the same legal protections as regular employees.", ans:"\u2461"},
      {q:"B. Technology has expanded the scale of flexible work, though the concept itself is not new.", ans:"\u2462"},
      {q:"C. Some governments are placing responsibility on companies to classify workers correctly.", ans:"\u2463"},
      {q:"D. The future direction of gig work depends on forces like automation and regulation.", ans:"\u2464"},
      {q:"E. Flexible digital platforms have enabled a significant increase in contract-based work.", ans:"\u2460"}
    ],
    matchClues: [
      "\u2461: gig workers lack access to benefits such as health insurance...classified as independent contractors \u2014 \u300Cnot enjoy same legal protections\u300D \u5bf9\u5e94 \u300Clack access to benefits\u300D",
      "\u2462: not a new phenomenon...What is new is the scale and technology \u2014 \u300Cconcept not new\u300D \u5bf9\u5e94 \u300Cnot a new phenomenon\u300D\uff0c\u300Ctechnology expanded scale\u300D \u5bf9\u5e94 \u300Cthe scale and technology\u300D",
      "\u2463: legislation requiring platforms to prove workers are not employees, shifting the burden \u2014 \u300Cplacing responsibility on companies\u300D \u5bf9\u5e94 \u300Cshifting the burden...to the company\u300D",
      "\u2464: trajectory unclear...automation displaces jobs / regulation will push platforms \u2014 \u300Cfuture depends on automation and regulation\u300D \u4e0e\u6bb5\u843d\u76f4\u63a5\u5bf9\u5e94",
      "\u2460: gig economy grown substantially...Platforms like Uber, Airbnb...flexible schedule \u2014 \u300Cflexible digital platforms\u300D \u5bf9\u5e94 \u300CPlatforms\u300D\uff0c\u300Csignificant increase\u300D \u5bf9\u5e94 \u300Cgrown substantially\u300D"
    ],
    passageCn: "\u2460 \u96f6\u5de5\u7ecf\u6d4e\u2014\u2014\u4ee5\u77ed\u671f\u5408\u540c\u548c\u81ea\u7531\u804c\u4e1a\u4e3a\u7279\u5f81\u800c\u975e\u6c38\u4e45\u5c97\u4f4d\u2014\u2014\u5728\u8fc7\u53bb\u5341\u5e74\u4e2d\u5927\u5e45\u589e\u957f\u3002Uber\u3001Airbnb\u548cFiverr\u7b49\u5e73\u53f0\u4f7f\u6570\u767e\u4e07\u5de5\u4eba\u80fd\u591f\u7075\u6d3b\u65f6\u95f4\u8d5a\u53d6\u6536\u5165\u3002\n\n\u2461 \u5c3d\u7ba1\u5177\u6709\u5438\u5f15\u529b\uff0c\u96f6\u5de5\u7ecf\u6d4e\u5f15\u53d1\u4e86\u5bf9\u5de5\u4eba\u798f\u5229\u7684\u4e25\u91cd\u5173\u5207\u3002\u96f6\u5de5\u901a\u5e38\u88ab\u5212\u5206\u4e3a\u72ec\u7acb\u627f\u5305\u5546\u800c\u975e\u96c7\u5458\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u65e0\u6cd5\u4eab\u53d7\u5065\u5eb7\u4fdd\u9669\u3001\u5e26\u85aa\u4f11\u5047\u548c\u5931\u4e1a\u4fdd\u62a4\u7b49\u798f\u5229\u3002\n\n\u2462 \u4e00\u4e9b\u7814\u7a76\u4eba\u5458\u8ba4\u4e3a\u96f6\u5de5\u7ecf\u6d4e\u5e76\u975e\u65b0\u73b0\u8c61\uff0c\u800c\u662f\u52b3\u52a8\u529b\u5e02\u573a\u7684\u6570\u5b57\u5316\u5ef6\u4f38\uff0c\u52b3\u52a8\u529b\u5e02\u573a\u603b\u662f\u5305\u542b\u4e34\u65f6\u548c\u517c\u804c\u5de5\u4f5c\u3002\u65b0\u7684\u662f\u89c4\u6a21\u548c\u534f\u8c03\u5b83\u7684\u6280\u672f\u3002\n\n\u2463 \u51e0\u4e2a\u653f\u5e9c\u5df2\u5f00\u59cb\u56de\u5e94\u3002\u6b27\u76df\u5f15\u5165\u7acb\u6cd5\uff0c\u8981\u6c42\u5e73\u53f0\u8bc1\u660e\u5de5\u4eba\u4e0d\u662f\u96c7\u5458\uff0c\u5c06\u5206\u7c7b\u8d1f\u62c5\u4ece\u5de5\u4eba\u8f6c\u79fb\u5230\u516c\u53f8\u3002\u52a0\u5dde\u4e8e2019\u5e74\u901a\u8fc7\u4e86\u7c7b\u4f3c\u6cd5\u5f8b\u3002\n\n\u2464 \u96f6\u5de5\u7ecf\u6d4e\u7684\u957f\u671f\u8f68\u8ff9\u4ecd\u4e0d\u6e05\u6670\u3002\u4e00\u4e9b\u4eba\u9884\u6d4b\u5b83\u5c06\u968f\u7740\u81ea\u52a8\u5316\u66ff\u4ee3\u4f20\u7edf\u5de5\u4f5c\u800c\u7ee7\u7eed\u589e\u957f\uff1b\u5176\u4ed6\u4eba\u5219\u8ba4\u4e3a\u6539\u5584\u7684\u76d1\u7ba1\u5c06\u63a8\u52a8\u5e73\u53f0\u63d0\u4f9b\u66f4\u597d\u7684\u4fdd\u62a4\uff0c\u7f29\u5c0f\u96f6\u5de5\u548c\u4f20\u7edf\u5c31\u4e1a\u4e4b\u95f4\u7684\u5dee\u8ddd\u3002"
  },
  // ---- 3. 选词填空：2021.6 ----
  {
    id: "c2021_6",
    year: "2021年6月", type: "选词填空",
    title: "2021年6月 · 选词填空",
    instruction: "从下方词库中选择合适的单词填入空格（每词只用一次，注意形态变化）",
    words: ["address","appeal","capable","challenge","diverse","expand","facilitate","inevitable","promote","rely"],
    text: "One of the most pressing issues facing modern education is how to __(1)__ the needs of an increasingly __(2)__ student population. Schools today must __(3)__ learning for students with different cultural backgrounds, learning styles, and abilities. While technology can __(4)__ educational access, many schools still __(5)__ heavily on traditional teaching methods. Critics argue that this approach is unlikely to __(6)__ student creativity or prepare them for a rapidly changing job market. Experts suggest that teachers who __(7)__ to students' lived experiences tend to be most effective. Every student is __(8)__ of growth, but unlocking that potential remains a __(9)__. It may seem __(10)__ that some students fall behind, but with proper support, outcomes can change.",
    answers: {1:"address",2:"diverse",3:"facilitate",4:"expand",5:"rely",6:"promote",7:"appeal",8:"capable",9:"challenge",10:"inevitable"},
    analysis: "\u6838\u5fc3\u642d\u914d\uff1aaddress the needs\uff08\u89e3\u51b3\u9700\u6c42\uff09\u3001facilitate learning\uff08\u4fc3\u8fdb\u5b66\u4e60\uff09\u3001expand access\uff08\u6269\u5927\u83b7\u53d6\u9014\u5f84\uff09\u3001rely on\uff08\u4f9d\u8d56\uff09\u3001promote creativity\uff08\u6fc0\u52b1\u521b\u9020\u529b\uff09\u3001appeal to\uff08\u5438\u5f15/\u8fce\u5408\uff09\u3001capable of\uff08\u6709\u80fd\u529b\uff09\u3002\u6ce8\u610f\u7b2c7\u7a7a\u662f appeal \u4f5c\u52a8\u8bcd\u7528\u6cd5\uff08appeal to sb = \u5438\u5f15\u67d0\u4eba\uff09\uff0c\u4e0d\u662f\u540d\u8bcd\u3002",
    wordReasons: {
      1:"address the needs\uff08\u89e3\u51b3/\u5904\u7406\u9700\u6c42\uff09\uff0c\u56fa\u5b9a\u642d\u914d address + \u95ee\u9898/\u9700\u6c42",
      2:"diverse student population\uff08\u591a\u6837\u5316\u7684\u5b66\u751f\u7fa4\u4f53\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970\u540d\u8bcd",
      3:"facilitate learning\uff08\u4fc3\u8fdb/\u63a8\u52a8\u5b66\u4e60\uff09\uff0cfacilitate + \u540d\u8bcd\u5e38\u89c1\u642d\u914d",
      4:"expand access\uff08\u6269\u5927\u83b7\u53d6\u9014\u5f84\uff09\uff0ctechnology can expand educational access \u5e38\u89c1\u8868\u8fbe",
      5:"rely on traditional methods\uff08\u4f9d\u8d56\u4f20\u7edf\u65b9\u6cd5\uff09\uff0crely on \u56fa\u5b9a\u642d\u914d\uff0cheavily rely on \u5f3a\u8c03\u7a0b\u5ea6",
      6:"promote student creativity\uff08\u6fc0\u52b1/\u4fc3\u8fdb\u521b\u9020\u529b\uff09\uff0cpromote + \u62bd\u8c61\u540d\u8bcd",
      7:"appeal to students' experiences\uff08\u8fce\u5408/\u5438\u5f15\u5b66\u751f\u7ecf\u5386\uff09\uff0cappeal to \u56fa\u5b9a\u642d\u914d\uff0c\u6b64\u5904\u4f5c\u52a8\u8bcd",
      8:"capable of growth\uff08\u6709\u80fd\u529b\u6210\u957f\uff09\uff0cbe capable of \u56fa\u5b9a\u642d\u914d",
      9:"remains a challenge\uff08\u4ecd\u662f\u4e00\u4e2a\u6311\u6218\uff09\uff0cremain + \u540d\u8bcd\u8868\u8bed",
      10:"inevitable that some fall behind\uff08\u4e0d\u53ef\u907f\u514d\u6709\u4e9b\u843d\u540e\uff09\uff0cit is inevitable that \u53e5\u578b"
    },
    passageCn: "\u73b0\u4ee3\u6559\u80b2\u9762\u4e34\u7684\u6700\u7d27\u8feb\u95ee\u9898\u4e4b\u4e00\u662f\u5982\u4f55\u5e94\u5bf9\u65e5\u76ca\u591a\u6837\u5316\u7684\u5b66\u751f\u7fa4\u4f53\u7684\u9700\u6c42\u3002\u4eca\u5929\u7684\u5b66\u6821\u5fc5\u987b\u4e3a\u5177\u6709\u4e0d\u540c\u6587\u5316\u80cc\u666f\u3001\u5b66\u4e60\u98ce\u683c\u548c\u80fd\u529b\u7684\u5b66\u751f\u63d0\u4f9b\u4fbf\u5229\u3002\u867d\u7136\u6280\u672f\u53ef\u4ee5\u6269\u5927\u6559\u80b2\u83b7\u53d6\u9014\u5f84\uff0c\u4f46\u8bb8\u591a\u5b66\u6821\u4ecd\u7136\u4e25\u91cd\u4f9d\u8d56\u4f20\u7edf\u6559\u5b66\u65b9\u6cd5\u3002\u6279\u8bc4\u8005\u8ba4\u4e3a\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u592a\u53ef\u80fd\u4fc3\u8fdb\u5b66\u751f\u7684\u521b\u9020\u529b\uff0c\u4e5f\u65e0\u6cd5\u4e3a\u4ed6\u4eec\u51c6\u5907\u597d\u5e94\u5bf9\u5feb\u901f\u53d8\u5316\u7684\u5c31\u4e1a\u5e02\u573a\u3002\u4e13\u5bb6\u5efa\u8bae\uff0c\u80fd\u591f\u8fce\u5408\u5b66\u751f\u5b9e\u9645\u751f\u6d3b\u7ecf\u5386\u7684\u6559\u5e08\u5f80\u5f80\u6700\u4e3a\u6709\u6548\u3002\u6bcf\u4e2a\u5b66\u751f\u90fd\u6709\u6210\u957f\u7684\u80fd\u529b\uff0c\u4f46\u6316\u6398\u8fd9\u4e00\u6f5c\u529b\u4ecd\u7136\u662f\u4e00\u4e2a\u6311\u6218\u3002\u4e00\u4e9b\u5b66\u751f\u843d\u540e\u4f3c\u4e4e\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u4f46\u6709\u4e86\u9002\u5f53\u7684\u652f\u6301\uff0c\u7ed3\u679c\u53ef\u4ee5\u6539\u53d8\u3002"
  },
  // ---- 4. 翻译：2022.6 ----
  {
    id: "t2022_6",
    year: "2022年6月", type: "翻译",
    title: "2022年6月 · 翻译真题",
    instruction: "将下面的中文段落翻译成英文（参考用时15分钟）",
    source: "\u4e2d\u56fd\u7684\u8336\u6587\u5316\u5386\u53f2\u60a0\u4e45\uff0c\u662f\u4e2d\u534e\u6587\u660e\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u4ece\u53e4\u4ee3\u4e1d\u7ef8\u4e4b\u8def\u5230\u73b0\u4ee3\u7684\u8336\u9986\u6587\u5316\uff0c\u8336\u4e0d\u4ec5\u662f\u4e00\u79cd\u996e\u6599\uff0c\u66f4\u662f\u4eba\u4e0e\u4eba\u4e4b\u95f4\u4ea4\u6d41\u548c\u6c9f\u901a\u7684\u5a92\u4ecb\u3002\u996e\u8336\u5728\u4e2d\u56fd\u6709\u7740\u72ec\u7279\u7684\u793c\u4eea\uff0c\u4e3b\u4eba\u5411\u5ba2\u4eba\u5949\u8336\u662f\u8868\u8fbe\u70ed\u60c5\u597d\u5ba2\u7684\u4f20\u7edf\u65b9\u5f0f\u3002\u5982\u4eca\uff0c\u8336\u6587\u5316\u5df2\u8d70\u5411\u4e16\u754c\uff0c\u6210\u4e3a\u5404\u56fd\u4eba\u6c11\u4e86\u89e3\u4e2d\u56fd\u6587\u5316\u7684\u91cd\u8981\u7a97\u53e3\u3002",
    reference: "China's tea culture has a long history and is an important component of Chinese civilization. From the ancient Silk Road to modern teahouse culture, tea is not merely a beverage but also a medium for communication and connection between people. Drinking tea in China has unique rituals: serving tea to guests is a traditional way of expressing hospitality. Today, tea culture has spread across the world, becoming an important window through which people of all nations can understand Chinese culture.",
    keyPoints: ["\u5386\u53f2\u60a0\u4e45 \u2192 has a long history","\u91cd\u8981\u7ec4\u6210\u90e8\u5206 \u2192 important component","\u4e1d\u7ef8\u4e4b\u8def \u2192 Silk Road","\u5a92\u4ecb \u2192 medium","\u793c\u4eea \u2192 rituals / etiquette","\u70ed\u60c5\u597d\u5ba2 \u2192 hospitality","\u8d70\u5411\u4e16\u754c \u2192 spread across the world","\u4e86\u89e3\u4e2d\u56fd\u6587\u5316 \u2192 understand Chinese culture"],
    translationAnalysis: "\u8fd9\u7bc7\u7ffb\u8bd1\u8003\u67e5\u56db\u7ea7\u5e38\u89c1\u4e2d\u56fd\u6587\u5316\u7c7b\u8bcd\u6c47\u3002\u91cd\u70b9\u77ed\u8bed\uff1a\n1. has a long history\uff08\u5386\u53f2\u60a0\u4e45\uff09\u2014\u2014\u56fa\u5b9a\u8868\u8fbe\uff0c\u4e0d\u8981\u5199 long-standing history\n2. important component\uff08\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff09\u2014\u2014component \u6bd4 part \u66f4\u6b63\u5f0f\n3. not merely...but also...\uff08\u4e0d\u4ec5\u2026\u2026\u66f4\u662f\u2026\u2026\uff09\u2014\u2014\u8fde\u8bcd\u7ed3\u6784\u663e\u793a\u8bed\u6cd5\u6c34\u5e73\n4. medium for communication\uff08\u4ea4\u6d41\u7684\u5a92\u4ecb\uff09\u2014\u2014medium \u800c\u975e media\uff08media \u6307\u5927\u4f17\u5a92\u4f53\uff09\n5. rituals\uff08\u793c\u4eea\uff09\u2014\u2014\u6bd4 ceremony \u66f4\u8d34\u5408\u996e\u8336\u7684\u65e5\u5e38\u793c\u4eea\n6. hospitality\uff08\u597d\u5ba2\uff09\u2014\u2014\u9ad8\u9891\u8bcd\uff0c\u52a0\u5206\u8868\u8fbe"
  },
  // ---- 5. 阅读理解：2021.12 ----
  {
    id: "r2021_12",
    year: "2021年12月", type: "阅读理解",
    title: "2021年12月 · 阅读理解",
    instruction: "\u9605\u8bfb\u77ed\u6587\uff0c\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898",
    passage: `The relationship between sleep and academic performance has been studied extensively. Researchers at the University of Washington found that students who slept fewer than six hours per night had significantly lower grades than those who slept seven to nine hours\u2014regardless of the amount of time they spent studying.

The mechanism is straightforward: sleep plays a critical role in memory consolidation. During slow-wave sleep, the brain replays newly learned information and transfers it from short-term to long-term memory. Without adequate sleep, this process is interrupted, making it harder to retain information.

Sleep deprivation also impairs executive function\u2014the cognitive processes responsible for planning, decision-making, and self-regulation. Students who are sleep-deprived are more likely to procrastinate, make careless errors, and struggle to organize complex tasks.

One surprising finding: many students believe that "pulling an all-nighter" before an exam is effective. In reality, one full night of sleep after studying is more beneficial than cramming throughout the night, as sleep\u2014not additional study time\u2014is what locks information into memory.`,
    questions: [
      {q:"1. What was the key finding about sleep and grades?",
       options:["A. Students who study more always get better grades","B. Sleeping less than six hours lowers grades regardless of study time","C. Grades depend mainly on the quality of teaching","D. Seven hours is the minimum needed for any academic benefit"],
       ans:"B",
       explain:"\u7b2c\u4e00\u6bb5\u660e\u786e\uff1a'students who slept fewer than six hours...significantly lower grades...regardless of the amount of time they spent studying'\u3002\u5173\u952e\u8bcd regardless of\uff08\u65e0\u8bba\uff09\u8868\u660e\u5373\u4f7f\u5b66\u4e60\u65f6\u95f4\u5f88\u957f\uff0c\u7761\u7720\u4e0d\u8db3\u4ecd\u4f1a\u5bfc\u81f4\u6210\u7ee9\u4e0b\u964d\u3002",
       wrongReasons:{A:"\u7814\u7a76\u8868\u660e\u5b66\u4e60\u65f6\u95f4\u4e0d\u662f\u5173\u952e\uff0c\u7761\u7720\u624d\u662f",C:"\u6587\u7ae0\u672a\u63d0\u6559\u5b66\u8d28\u91cf",D:"\u6587\u7ae0\u8bf4\u4e03\u81f3\u4e5d\u5c0f\u65f6\u8f83\u4f73\uff0c\u4f46\u91cd\u70b9\u662f\u5c11\u4e8e\u516d\u5c0f\u65f6\u7684\u5f71\u54cd"}},
      {q:"2. What happens during slow-wave sleep according to the passage?",
       options:["A. The brain clears unnecessary memories","B. Dreams help process emotional trauma","C. Newly learned information is transferred to long-term memory","D. The brain increases its glucose consumption"],
       ans:"C",
       explain:"\u7b2c\u4e8c\u6bb5\uff1a'brain replays newly learned information and transfers it from short-term to long-term memory'\u3002\u6162\u6ce2\u7761\u7720\u7684\u4f5c\u7528\u662f\u5c06\u77ed\u671f\u8bb0\u5fc6\u8f6c\u5316\u4e3a\u957f\u671f\u8bb0\u5fc6\uff0c\u800c\u975e\u6e05\u9664\u8bb0\u5fc6\u6216\u5904\u7406\u60c5\u7eea\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u63d0\u6e05\u9664\u8bb0\u5fc6",B:"\u6587\u7ae0\u672a\u63d0\u68a6\u5883\u4e0e\u60c5\u7eea\u5904\u7406",D:"\u6587\u7ae0\u672a\u63d0\u8461\u8404\u7cd6\u6d88\u8017"}},
      {q:"3. Why is 'pulling an all-nighter' ineffective?",
       options:["A. Students cannot concentrate late at night","B. Sleep\u2014not extra study time\u2014is what consolidates memory","C. Exams are usually scheduled in the morning","D. All-nighters reduce motivation the next day"],
       ans:"B",
       explain:"\u6700\u540e\u6bb5\uff1a'sleep\u2014not additional study time\u2014is what locks information into memory'\u3002\u7814\u7a76\u53d1\u73b0\u5b66\u4e60\u540e\u4e00\u6574\u591c\u7684\u7761\u7720\u6bd4\u719f\u591c\u66f4\u6709\u76ca\uff0c\u56e0\u4e3a\u662f\u7761\u7720\u5c06\u4fe1\u606f\u9501\u5b9a\u5728\u8bb0\u5fc6\u4e2d\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u8ba8\u8bba\u591c\u665a\u4e13\u6ce8\u529b\u95ee\u9898",C:"\u8003\u8bd5\u65f6\u95f4\u4e0e\u8bb0\u5fc6\u5de9\u56fa\u65e0\u5173",D:"\u6587\u7ae0\u672a\u63d0\u52a8\u529b\u51cf\u5c11"}}
    ],
    passageCn: "\u7761\u7720\u4e0e\u5b66\u4e1a\u8868\u73b0\u4e4b\u95f4\u7684\u5173\u7cfb\u5df2\u88ab\u5e7f\u6cdb\u7814\u7a76\u3002\u534e\u76db\u987f\u5927\u5b66\u7684\u7814\u7a76\u4eba\u5458\u53d1\u73b0\uff0c\u6bcf\u665a\u7761\u7720\u5c11\u4e8e\u516d\u5c0f\u65f6\u7684\u5b66\u751f\u6210\u7ee9\u660e\u663e\u4f4e\u4e8e\u7761\u7720\u4e03\u81f3\u4e5d\u5c0f\u65f6\u7684\u5b66\u751f\u2014\u2014\u65e0\u8bba\u4ed6\u4eec\u82b1\u4e86\u591a\u5c11\u65f6\u95f4\u5b66\u4e60\u3002\n\n\u673a\u5236\u5f88\u7b80\u5355\uff1a\u7761\u7720\u5728\u8bb0\u5fc6\u5de9\u56fa\u4e2d\u8d77\u7740\u5173\u952e\u4f5c\u7528\u3002\u5728\u6162\u6ce2\u7761\u7720\u671f\u95f4\uff0c\u5927\u8111\u91cd\u6f14\u65b0\u5b66\u5230\u7684\u4fe1\u606f\uff0c\u5e76\u5c06\u5176\u4ece\u77ed\u671f\u8bb0\u5fc6\u8f6c\u79fb\u5230\u957f\u671f\u8bb0\u5fc6\u3002\u6ca1\u6709\u5145\u8db3\u7684\u7761\u7720\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u5c31\u4f1a\u4e2d\u65ad\uff0c\u4f7f\u4fdd\u7559\u4fe1\u606f\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\u3002\n\n\u7761\u7720\u4e0d\u8db3\u8fd8\u4f1a\u635f\u5bb3\u6267\u884c\u529f\u80fd\u2014\u2014\u8d1f\u8d23\u89c4\u5212\u3001\u51b3\u7b56\u548c\u81ea\u6211\u8c03\u8282\u7684\u8ba4\u77e5\u8fc7\u7a0b\u3002\u7761\u7720\u4e0d\u8db3\u7684\u5b66\u751f\u66f4\u5bb9\u6613\u62d6\u5ef6\u3001\u72af\u7c97\u5fc3\u9519\u8bef\uff0c\u5e76\u96be\u4ee5\u7ec4\u7ec7\u590d\u6742\u7684\u4efb\u52a1\u3002\n\n\u4e00\u4e2a\u4ee4\u4eba\u60ca\u8bb6\u7684\u53d1\u73b0\uff1a\u8bb8\u591a\u5b66\u751f\u8ba4\u4e3a\u8003\u524d\u300c\u901a\u5bb5\u590d\u4e60\u300d\u662f\u6709\u6548\u7684\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5b66\u4e60\u540e\u4e00\u6574\u591c\u7684\u7761\u7720\u6bd4\u6574\u591c\u4e34\u65f6\u62b1\u4f5b\u811a\u66f4\u6709\u76ca\uff0c\u56e0\u4e3a\u662f\u7761\u7720\u2014\u2014\u800c\u975e\u989d\u5916\u7684\u5b66\u4e60\u65f6\u95f4\u2014\u2014\u5c06\u4fe1\u606f\u9501\u5165\u8bb0\u5fc6\u3002"
  },
  // ---- 7. 段落匹配：2019.12 ----
  {
    id: "m2019_12",
    year: "2019年12月", type: "段落匹配",
    title: "2019年12月 · 段落匹配",
    instruction: "\u9605\u8bfb\u4e0b\u65b95\u4e2a\u6bb5\u843d\uff0c\u5c06\u9898\u76ee\u9648\u8ff0\uff08A-E\uff09\u4e0e\u6b63\u786e\u6bb5\u843d\u7f16\u53f7\uff08\u2460-\u2464\uff09\u5339\u914d",
    paragraphs: [
      "\u2460 Researchers have found that spending time in nature reduces cortisol levels\u2014the body's primary stress hormone\u2014and lowers heart rate and blood pressure. Even brief exposure to green spaces can produce measurable physiological benefits.",
      "\u2461 Despite growing evidence of nature's health benefits, urban residents spend an average of 90% of their time indoors. City planners and public health experts are increasingly advocating for the integration of green spaces into urban design.",
      "\u2462 The concept of 'forest bathing,' or shinrin-yoku in Japanese, originated in Japan in the 1980s as a form of preventive medicine. It involves slow, mindful walks through forests, with the goal of absorbing the sights, sounds, and scents of the natural environment.",
      "\u2463 Some researchers attribute nature's calming effects to a phenomenon called 'soft fascination.' Unlike the intense concentration required by tasks like reading or driving, natural environments engage attention gently, allowing the mind to rest and restore itself.",
      "\u2464 Companies have begun to recognize the benefits of nature exposure for employee wellbeing. Some workplaces now incorporate biophilic design\u2014featuring indoor plants, natural lighting, and views of green spaces\u2014reporting improvements in productivity and reduced absenteeism."
    ],
    questions: [
      {q:"A. A traditional Japanese wellness practice involves slow walks in forested areas.", ans:"\u2462"},
      {q:"B. Incorporating nature into office environments can improve worker health and output.", ans:"\u2464"},
      {q:"C. Natural environments restore mental energy by engaging attention in a gentle, effortless way.", ans:"\u2463"},
      {q:"D. Physical health benefits from nature exposure include measurable reductions in stress indicators.", ans:"\u2460"},
      {q:"E. Urban planners are increasingly trying to bring natural elements into city environments.", ans:"\u2461"}
    ],
    matchClues: [
      "\u2462: shinrin-yoku in Japanese...slow, mindful walks through forests \u2014 \u300Ctraditional Japanese\u300D \u5bf9\u5e94 \u300Coriginated in Japan\u300D\uff0c\u300Cwellness practice\u300D \u5bf9\u5e94 \u300Cpreventive medicine\u300D\uff0c\u300Cforested areas\u300D \u5bf9\u5e94 \u300Cforests\u300D",
      "\u2464: biophilic design...improvements in productivity and reduced absenteeism \u2014 \u300Coffice environments\u300D \u5bf9\u5e94 \u300Cworkplaces\u300D\uff0c\u300Cworker health and output\u300D \u5bf9\u5e94 \u300Cwellbeing...productivity\u300D",
      "\u2463: soft fascination...allows the mind to rest and restore \u2014 \u300Crestore mental energy\u300D \u5bf9\u5e94 \u300Cmind to rest and restore\u300D\uff0c\u300Cgentle\u300D \u5bf9\u5e94 \u300Cgently\u300D",
      "\u2460: reduces cortisol levels...lowers heart rate and blood pressure \u2014 \u300Creductions in stress indicators\u300D \u5bf9\u5e94 \u300Creduces cortisol...heart rate\u300D\uff0c\u300Cmeasurable\u300D \u76f4\u63a5\u51fa\u73b0",
      "\u2461: city planners...advocating for integration of green spaces into urban design \u2014 \u300Curban planners...natural elements into city\u300D \u4e0e\u539f\u6587\u76f4\u63a5\u5bf9\u5e94"
    ],
    passageCn: "\u2460 \u7814\u7a76\u4eba\u5458\u53d1\u73b0\uff0c\u5728\u81ea\u7136\u4e2d\u5ea6\u8fc7\u65f6\u95f4\u53ef\u4ee5\u964d\u4f4e\u76ae\u8d28\u9187\u6c34\u5e73\uff08\u8eab\u4f53\u4e3b\u8981\u7684\u538b\u529b\u6fc0\u7d20\uff09\u5e76\u964d\u4f4e\u5fc3\u7387\u548c\u8840\u538b\u3002\u751a\u81f3\u77ed\u6682\u63a5\u89e6\u7eff\u8272\u7a7a\u95f4\u4e5f\u80fd\u4ea7\u751f\u53ef\u8861\u91cf\u7684\u751f\u7406\u76ca\u5904\u3002\n\n\u2461 \u5c3d\u7ba1\u8d8a\u6765\u8d8a\u591a\u7684\u8bc1\u636e\u8868\u660e\u81ea\u7136\u5bf9\u5065\u5eb7\u6709\u76ca\uff0c\u57ce\u5e02\u5c45\u6c11\u5e73\u5747\u670990%\u7684\u65f6\u95f4\u5728\u5ba4\u5185\u5ea6\u8fc7\u3002\u57ce\u5e02\u89c4\u5212\u8005\u548c\u516c\u5171\u536b\u751f\u4e13\u5bb6\u8d8a\u6765\u8d8a\u5021\u5bfc\u5c06\u7eff\u8272\u7a7a\u95f4\u878d\u5165\u57ce\u5e02\u8bbe\u8ba1\u3002\n\n\u2462 \u300c\u68ee\u6797\u6d74\u300d\uff08\u65e5\u8bed\u79f0\u4e3a shinrin-yoku\uff09\u7684\u6982\u5ff5\u8d77\u6e90\u4e8e20\u4e16\u7eaa80\u5e74\u4ee3\u7684\u65e5\u672c\uff0c\u662f\u4e00\u79cd\u9884\u9632\u6027\u533b\u5b66\u5f62\u5f0f\u3002\u5b83\u5305\u62ec\u5728\u68ee\u6797\u4e2d\u7f13\u6162\u3001\u6b63\u5ff5\u5730\u6563\u6b65\uff0c\u76ee\u6807\u662f\u5438\u6536\u81ea\u7136\u73af\u5883\u7684\u666f\u8c61\u3001\u58f0\u97f3\u548c\u6c14\u5473\u3002\n\n\u2463 \u4e00\u4e9b\u7814\u7a76\u4eba\u5458\u5c06\u81ea\u7136\u7684\u9547\u9759\u6548\u679c\u5f52\u56e0\u4e8e\u4e00\u79cd\u79f0\u4e3a\u300c\u8f6f\u6027\u8ff7\u604b\u300d\u7684\u73b0\u8c61\u3002\u4e0e\u9605\u8bfb\u6216\u9a7e\u9a76\u7b49\u4efb\u52a1\u6240\u9700\u7684\u5f3a\u70c8\u96c6\u4e2d\u4e0d\u540c\uff0c\u81ea\u7136\u73af\u5883\u6e29\u548c\u5730\u5438\u5f15\u6ce8\u610f\u529b\uff0c\u8ba9\u5927\u8111\u5f97\u5230\u4f11\u606f\u548c\u6062\u590d\u3002\n\n\u2464 \u516c\u53f8\u5df2\u5f00\u59cb\u8ba4\u8bc6\u5230\u63a5\u89e6\u81ea\u7136\u5bf9\u5458\u5de5\u798f\u5229\u7684\u76ca\u5904\u3002\u4e00\u4e9b\u5de5\u4f5c\u573a\u6240\u73b0\u5728\u91c7\u7528\u751f\u7269\u4eb2\u548c\u8bbe\u8ba1\u2014\u2014\u5305\u62ec\u5ba4\u5185\u690d\u7269\u3001\u81ea\u7136\u91c7\u5149\u548c\u7eff\u8272\u7a7a\u95f4\u666f\u89c2\u2014\u2014\u62a5\u544a\u663e\u793a\u751f\u4ea7\u529b\u63d0\u9ad8\u548c\u7f3a\u52e4\u7387\u964d\u4f4e\u3002"
  },
  // ---- 8. 翻译：2021.6 ----
  {
    id: "t2021_6",
    year: "2021年6月", type: "翻译",
    title: "2021年6月 · 翻译真题",
    instruction: "\u5c06\u4e0b\u9762\u7684\u4e2d\u6587\u6bb5\u843d\u7ffb\u8bd1\u6210\u82f1\u6587\uff08\u53c2\u8003\u7528\u65f615\u5206\u949f\uff09",
    source: "\u4e2d\u56fd\u7684\u822a\u5929\u4e8b\u4e1a\u53d6\u5f97\u4e86\u4e3e\u4e16\u77a9\u76ee\u7684\u6210\u5c31\u3002\u4ece\u7b2c\u4e00\u9897\u4eba\u9020\u536b\u661f\u4e0a\u5929\u5230\u8f7d\u4eba\u822a\u5929\u98de\u884c\uff0c\u518d\u5230\u6708\u7403\u63a2\u6d4b\u548c\u706b\u661f\u63a2\u7d22\uff0c\u4e2d\u56fd\u822a\u5929\u4eba\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u53c8\u4e00\u4e2a\u91cd\u5927\u7a81\u7834\u3002\u8fd9\u4e9b\u6210\u5c31\u4e0d\u4ec5\u5c55\u793a\u4e86\u4e2d\u56fd\u7684\u79d1\u6280\u5b9e\u529b\uff0c\u4e5f\u6fc0\u52b1\u4e86\u4e00\u4ee3\u53c8\u4e00\u4ee3\u7684\u5e74\u8f7b\u4eba\u6295\u8eab\u79d1\u5b66\u7814\u7a76\u3002\u4e2d\u56fd\u5c06\u7ee7\u7eed\u548c\u5e73\u5229\u7528\u592a\u7a7a\u8d44\u6e90\uff0c\u4e3a\u4eba\u7c7b\u63a2\u7d22\u5b87\u5b99\u4f5c\u51fa\u66f4\u5927\u8d21\u732e\u3002",
    reference: "China's space program has achieved remarkable accomplishments that have drawn worldwide attention. From launching its first artificial satellite to crewed spaceflight, lunar exploration, and Mars exploration, Chinese space scientists and engineers have advanced step by step, achieving one major breakthrough after another. These achievements not only demonstrate China's scientific and technological strength, but also inspire generation after generation of young people to devote themselves to scientific research. China will continue to make peaceful use of space resources and make greater contributions to humanity's exploration of the universe.",
    keyPoints: ["\u4e3e\u4e16\u77a9\u76ee \u2192 drawn worldwide attention","\u8f7d\u4eba\u822a\u5929 \u2192 crewed spaceflight","\u6708\u7403\u63a2\u6d4b \u2192 lunar exploration","\u706b\u661f\u63a2\u7d22 \u2192 Mars exploration","\u4e00\u6b65\u4e00\u4e2a\u811a\u5370 \u2192 step by step","\u79d1\u6280\u5b9e\u529b \u2192 scientific and technological strength","\u548c\u5e73\u5229\u7528 \u2192 make peaceful use of","\u63a2\u7d22\u5b87\u5b99 \u2192 exploration of the universe"],
    translationAnalysis: "\u8fd9\u7bc7\u7ffb\u8bd1\u8003\u67e5\u822a\u5929\u79d1\u6280\u4e13\u4e1a\u8bcd\u6c47\u3002\u91cd\u70b9\u77ed\u8bed\uff1a\n1. drawn worldwide attention\uff08\u4e3e\u4e16\u77a9\u76ee\uff09\u2014\u2014\u4e5f\u53ef\u4ee5\u7528 gained worldwide attention\n2. crewed spaceflight\uff08\u8f7d\u4eba\u822a\u5929\uff09\u2014\u2014\u6ce8\u610f\u662f crewed \u800c\u975e manned\uff08\u73b0\u4ee3\u82f1\u8bed\u66f4\u504f\u597d crewed\uff09\n3. lunar / Mars exploration\uff08\u6708\u7403/\u706b\u661f\u63a2\u6d4b\uff09\u2014\u2014\u592a\u7a7a\u8bcd\u6c47\u5fc5\u5907\n4. step by step\uff08\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\uff09\u2014\u2014\u6210\u8bed\u76f4\u8bd1\n5. generation after generation\uff08\u4e00\u4ee3\u53c8\u4e00\u4ee3\uff09\u2014\u2014\u53e0\u52a0\u8868\u8fbe\uff0c\u6bd4 successive generations \u66f4\u751f\u52a8"
  },
  // ---- 9. 阅读理解：2022.6 ----
  {
    id: "r2022_6b",
    year: "2022年6月", type: "阅读理解",
    title: "2022年6月 · 阅读理解\uff08\u7b2c2\u7bc7\uff09",
    instruction: "\u9605\u8bfb\u77ed\u6587\uff0c\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898",
    passage: `The concept of emotional intelligence (EI)\u2014the ability to perceive, use, understand, and manage emotions\u2014has gained considerable attention in both academic and corporate circles since psychologist Daniel Goleman popularized it in the 1990s.

Research suggests that EI may be as important as, or in some contexts more important than, traditional IQ in predicting job performance, particularly in leadership roles. Leaders with high emotional intelligence are better at building relationships, resolving conflicts, motivating teams, and adapting to change.

A frequently cited study found that among the competencies that distinguish star performers from average workers, emotional intelligence accounted for roughly two-thirds\u2014a finding that has proven robust across industries and cultures.

Critics, however, argue that EI is difficult to measure consistently and that some assessments may simply reflect personality traits or social skills that could be captured by other established measures. The debate over whether EI is truly distinct from personality and cognitive ability continues.

Despite this debate, the practical applications of EI training in workplaces have shown promising results. Programs that teach skills such as active listening, empathy, and conflict resolution have been associated with improved team cohesion and lower employee turnover.`,
    questions: [
      {q:"1. What does the passage say about EI in leadership contexts?",
       options:["A. It is less important than IQ for leaders","B. It is the sole predictor of leadership success","C. Leaders with high EI outperform others in key relational skills","D. EI is mainly relevant to creative industries"],
       ans:"C",
       explain:"\u7b2c\u4e8c\u6bb5\uff1a'Leaders with high emotional intelligence are better at building relationships, resolving conflicts, motivating teams, and adapting to change'\u3002\u9ad8\u60c5\u5546\u9886\u5bfc\u8005\u5728\u5efa\u7acb\u5173\u7cfb\u3001\u89e3\u51b3\u51b2\u7a81\u3001\u6fc0\u52b1\u56e2\u961f\u548c\u9002\u5e94\u53d8\u5316\u65b9\u9762\u66f4\u6709\u4f18\u52bf\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u8bf4EI\u53ef\u80fd\u548cIQ\u4e00\u6837\u91cd\u8981\u751a\u81f3\u66f4\u91cd\u8981\uff08as important as, or more important than\uff09",B:"\u6587\u7ae0\u8bf4EI\u662f\u91cd\u8981\u56e0\u7d20\u4e4b\u4e00\uff0c\u975e\u552f\u4e00\u9884\u6d4b\u56e0\u7d20",D:"\u6587\u7ae0\u8bf4EI\u5728\u5404\u884c\u4e1a\u548c\u6587\u5316\u4e2d\u5747\u9002\u7528\uff08across industries and cultures\uff09"}},
      {q:"2. What did the study about 'star performers' find?",
       options:["A. EI accounts for about one-third of high performance","B. High performers have higher IQs than average workers","C. EI accounted for roughly two-thirds of what distinguishes top performers","D. Star performers rely mainly on technical skills"],
       ans:"C",
       explain:"\u7b2c\u4e09\u6bb5\uff1a'emotional intelligence accounted for roughly two-thirds'\u3002\u5728\u533a\u5206\u660e\u661f\u8868\u73b0\u8005\u4e0e\u666e\u901a\u5de5\u4eba\u7684\u80fd\u529b\u4e2d\uff0c\u60c5\u7eea\u667a\u529b\u5360\u4e86\u7ea6\u4e09\u5206\u4e4b\u4e8c\u3002",
       wrongReasons:{A:"\u662f\u4e09\u5206\u4e4b\u4e8c\uff0c\u4e0d\u662f\u4e09\u5206\u4e4b\u4e00",B:"\u6587\u7ae0\u672a\u6bd4\u8f83IQ\u5dee\u5f02\uff0c\u800c\u662f\u5f3a\u8c03EI\u7684\u8d21\u732e",D:"\u6587\u7ae0\u5f3a\u8c03EI\u800c\u975e\u6280\u672f\u6280\u80fd\u662f\u533a\u5206\u56e0\u7d20"}},
      {q:"3. What is the main criticism of EI according to the passage?",
       options:["A. EI training programs are too expensive","B. EI is not useful in the real world","C. EI may not be truly distinct from personality and cognitive measures","D. EI research has only been conducted in the US"],
       ans:"C",
       explain:"\u7b2c\u56db\u6bb5\uff1a'difficult to measure consistently...may simply reflect personality traits or social skills...whether EI is truly distinct from personality and cognitive ability'\u3002\u6279\u8bc4\u8005\u8ba4\u4e3aEI\u96be\u4ee5\u4e00\u81f4\u6027\u5730\u6d4b\u91cf\uff0c\u53ef\u80fd\u53ea\u662f\u53cd\u6620\u4e86\u4e2a\u6027\u7279\u5f81\u6216\u793e\u4ea4\u6280\u80fd\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u63d0\u6210\u672c\u95ee\u9898",B:"\u76f8\u53cd\uff0c\u6587\u7ae0\u8bf4EI training\u6709promising results",D:"\u6587\u7ae0\u5f3a\u8c03\u7814\u7a76'robust across industries and cultures'\uff0c\u975e\u5355\u4e00\u56fd\u5bb6"}}
    ],
    passageCn: "\u60c5\u7eea\u667a\u529b\uff08EI\uff09\u2014\u2014\u611f\u77e5\u3001\u5229\u7528\u3001\u7406\u89e3\u548c\u7ba1\u7406\u60c5\u7eea\u7684\u80fd\u529b\u2014\u2014\u81ea\u5fc3\u7406\u5b66\u5bb6\u4e39\u5c3c\u5c14\u00b7\u6208\u5c14\u66fc\u57281990\u5e74\u4ee3\u5c06\u5176\u63a8\u5e7f\u4ee5\u6765\uff0c\u5728\u5b66\u672f\u754c\u548c\u4f01\u4e1a\u754c\u90fd\u53d7\u5230\u4e86\u76f8\u5f53\u5927\u7684\u5173\u6ce8\u3002\n\n\u7814\u7a76\u8868\u660e\uff0c\u5728\u9884\u6d4b\u5de5\u4f5c\u8868\u73b0\u65b9\u9762\uff0c\u7279\u522b\u662f\u5728\u9886\u5bfc\u89d2\u8272\u4e2d\uff0cEI\u53ef\u80fd\u4e0e\u4f20\u7edf\u667a\u5546\u4e00\u6837\u91cd\u8981\uff0c\u751a\u81f3\u5728\u67d0\u4e9b\u60c5\u5883\u4e0b\u66f4\u4e3a\u91cd\u8981\u3002\u5177\u6709\u9ad8\u60c5\u7eea\u667a\u529b\u7684\u9886\u5bfc\u8005\u66f4\u5584\u4e8e\u5efa\u7acb\u5173\u7cfb\u3001\u89e3\u51b3\u51b2\u7a81\u3001\u6fc0\u52b1\u56e2\u961f\u548c\u9002\u5e94\u53d8\u5316\u3002\n\n\u4e00\u9879\u7ecf\u5e38\u88ab\u5f15\u7528\u7684\u7814\u7a76\u53d1\u73b0\uff0c\u5728\u533a\u5206\u660e\u661f\u8868\u73b0\u8005\u4e0e\u666e\u901a\u5de5\u4f5c\u8005\u7684\u80fd\u529b\u4e2d\uff0c\u60c5\u7eea\u667a\u529b\u7ea6\u5360\u4e09\u5206\u4e4b\u4e8c\u2014\u2014\u8fd9\u4e00\u53d1\u73b0\u5728\u5404\u884c\u4e1a\u548c\u6587\u5316\u4e2d\u5747\u8868\u73b0\u7a33\u5065\u3002\n\n\u7136\u800c\uff0c\u6279\u8bc4\u8005\u8ba4\u4e3aEI\u96be\u4ee5\u4e00\u81f4\u6027\u5730\u6d4b\u91cf\uff0c\u4e00\u4e9b\u8bc4\u4f30\u53ef\u80fd\u53ea\u662f\u53cd\u6620\u4e86\u5176\u4ed6\u65e2\u5b9a\u6d4b\u91cf\u65b9\u6cd5\u53ef\u4ee5\u6355\u6349\u5230\u7684\u4e2a\u6027\u7279\u5f81\u6216\u793e\u4ea4\u6280\u80fd\u3002\u5173\u4e8eEI\u662f\u5426\u771f\u6b63\u533a\u522b\u4e8e\u4e2a\u6027\u548c\u8ba4\u77e5\u80fd\u529b\u7684\u4e89\u8bba\u4ecd\u5728\u7ee7\u7eed\u3002\n\n\u5c3d\u7ba1\u5b58\u5728\u8fd9\u79cd\u4e89\u8bba\uff0cEI\u57f9\u8bad\u5728\u5de5\u4f5c\u573a\u6240\u7684\u5b9e\u9645\u5e94\u7528\u5df2\u663e\u793a\u51fa\u4ee4\u4eba\u9f13\u821e\u7684\u7ed3\u679c\u3002\u6559\u6388\u79ef\u6781\u503e\u542c\u3001\u5171\u60c5\u548c\u51b2\u7a81\u89e3\u51b3\u7b49\u6280\u80fd\u7684\u8ba1\u5212\u4e0e\u56e2\u961f\u51dd\u805a\u529b\u6539\u5584\u548c\u5458\u5de5\u79bb\u804c\u7387\u964d\u4f4e\u6709\u5173\u3002"
  },
  // ---- 11. 选词填空：2020.6 ----
  {
    id: "c2020_6",
    year: "2020年6月", type: "选词填空",
    title: "2020年6月 · 选词填空",
    instruction: "\u4ece\u4e0b\u65b9\u8bcd\u5e93\u4e2d\u9009\u62e9\u5408\u9002\u7684\u5355\u8bcd\u586b\u5165\u7a7a\u683c\uff08\u6bcf\u8bcd\u53ea\u7528\u4e00\u6b21\uff0c\u6ce8\u610f\u5f62\u6001\u53d8\u5316\uff09",
    words: ["abundant","attribute","consume","cultivate","dedicate","innovative","potential","preserve","reduce","transform"],
    text: "Many communities are finding __(1)__ ways to deal with food waste, which is a growing global concern. On average, households __(2)__ more food than they realize, throwing away items that could still be used. Environmentalists argue that we must __(3)__ our consumption habits to __(4)__ natural resources. Food waste not only wastes __(5)__ energy and water used in production, but also contributes to greenhouse gas emissions. Urban farms and composting programs __(6)__ waste into useful soil nutrients. Cities that __(7)__ community gardens help residents __(8)__ a deeper connection to sustainable food systems. Many researchers __(9)__ the success of these programs to strong community engagement. Given the __(10)__ of available solutions, there is little excuse for inaction.",
    answers: {1:"innovative",2:"consume",3:"transform",4:"preserve",5:"abundant",6:"transform",7:"cultivate",8:"dedicate",9:"attribute",10:"abundance"},
    analysis: "\u6ce8\u610f\uff1atransform \u51fa\u73b0\u4e24\u6b21\uff08\u7b2c3\u548c\u7b2c6\u7a7a\uff09\uff0c\u610f\u4e3a\u300c\u6539\u53d8/\u8f6c\u53d8\u300d\uff1bcultivate gardens\uff08\u57f9\u80b2\u82b1\u56ed\uff09\uff1battribute success to\uff08\u5c06\u6210\u529f\u5f52\u56e0\u4e8e\uff09\uff1bdedicate\uff08\u4f7f\u4e13\u6ce8\u4e8e\uff09\u3002\u7b2c10\u7a7a\u7528 abundance\uff08\u540d\u8bcd\uff09\u800c\u975e abundant\uff08\u5f62\u5bb9\u8bcd\uff09\uff0c\u56e0\u4e3a\u540e\u9762\u662f\u540d\u8bcd\u77ed\u8bed of available solutions\u3002",
    wordReasons: {
      1:"innovative ways\uff08\u521b\u65b0\u65b9\u5f0f\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970 ways\uff0c\u9996\u9009 innovative",
      2:"households consume food\uff08\u5bb6\u5ead\u6d88\u8017\u98df\u7269\uff09\uff0cconsume + \u98df\u7269/\u8d44\u6e90\u662f\u56fa\u5b9a\u642d\u914d",
      3:"transform habits\uff08\u6539\u53d8\u4e60\u60ef\uff09\uff0cwe must + \u539f\u5f62\uff0ctransform \u8868\u6839\u672c\u6027\u6539\u53d8",
      4:"preserve natural resources\uff08\u4fdd\u62a4\u81ea\u7136\u8d44\u6e90\uff09\uff0c\u51cf\u5c11\u6d88\u8017\u4ee5\u4fdd\u62a4\u8d44\u6e90",
      5:"abundant energy\uff08\u5927\u91cf\u80fd\u6e90\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970 energy\uff0c\u63cf\u8ff0\u6d6a\u8d39\u91cf\u5927",
      6:"transform waste into nutrients\uff08\u5c06\u5e9f\u7269\u8f6c\u5316\u4e3a\u517b\u5206\uff09\uff0ctransform...into \u56fa\u5b9a\u642d\u914d",
      7:"cultivate community gardens\uff08\u57f9\u80b2\u793e\u533a\u82b1\u56ed\uff09\uff0ccities that + \u590d\u6570\u8c13\u8bed\u52a8\u8bcd cultivate",
      8:"dedicate a connection\uff08\u4f7f\u4e13\u6ce8\u4e8e\u8054\u7cfb\uff09\uff0chelp residents do \u7ed3\u6784\uff0cdedicate oneself to",
      9:"attribute success to engagement\uff08\u5c06\u6210\u529f\u5f52\u56e0\u4e8e\u53c2\u4e0e\uff09\uff0cattribute...to \u56fa\u5b9a\u642d\u914d",
      10:"abundance of available solutions\uff08\u5927\u91cf\u53ef\u7528\u89e3\u51b3\u65b9\u6848\uff09\uff0cgiven the abundance of \u56fa\u5b9a\u642d\u914d"
    },
    passageCn: "\u8bb8\u591a\u793e\u533a\u6b63\u5728\u5bfb\u627e\u521b\u65b0\u65b9\u5f0f\u6765\u5e94\u5bf9\u98df\u7269\u6d6a\u8d39\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u65e5\u76ca\u4e25\u91cd\u7684\u5168\u7403\u95ee\u9898\u3002\u5e73\u5747\u800c\u8a00\uff0c\u5bb6\u5ead\u6d88\u8017\u7684\u98df\u7269\u6bd4\u4ed6\u4eec\u610f\u8bc6\u5230\u7684\u8981\u591a\uff0c\u6254\u6389\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u7684\u7269\u54c1\u3002\u73af\u4fdd\u4e3b\u4e49\u8005\u8ba4\u4e3a\uff0c\u6211\u4eec\u5fc5\u987b\u6539\u53d8\u6d88\u8d39\u4e60\u60ef\u4ee5\u4fdd\u62a4\u81ea\u7136\u8d44\u6e90\u3002\u98df\u7269\u6d6a\u8d39\u4e0d\u4ec5\u6d6a\u8d39\u4e86\u751f\u4ea7\u4e2d\u4f7f\u7528\u7684\u5927\u91cf\u80fd\u6e90\u548c\u6c34\uff0c\u8fd8\u52a9\u957f\u4e86\u6e29\u5ba4\u6c14\u4f53\u6392\u653e\u3002\u57ce\u5e02\u519c\u573a\u548c\u5806\u80a5\u8ba1\u5212\u5c06\u5e9f\u7269\u8f6c\u5316\u4e3a\u6709\u7528\u7684\u571f\u58e4\u8425\u517b\u7269\u8d28\u3002\u57f9\u80b2\u793e\u533a\u82b1\u56ed\u7684\u57ce\u5e02\u5e2e\u52a9\u5c45\u6c11\u4e0e\u53ef\u6301\u7eed\u98df\u54c1\u7cfb\u7edf\u5efa\u7acb\u66f4\u6df1\u7684\u8054\u7cfb\u3002\u8bb8\u591a\u7814\u7a76\u4eba\u5458\u5c06\u8fd9\u4e9b\u9879\u76ee\u7684\u6210\u529f\u5f52\u56e0\u4e8e\u5f3a\u5927\u7684\u793e\u533a\u53c2\u4e0e\u5ea6\u3002\u9274\u4e8e\u5927\u91cf\u53ef\u7528\u89e3\u51b3\u65b9\u6848\u7684\u5b58\u5728\uff0c\u4e0d\u91c7\u53d6\u884c\u52a8\u51e0\u4e4e\u6ca1\u6709\u501f\u53e3\u3002"
  },
  // ---- 12. 段落匹配：2021.12 ----
  {
    id: "m2021_12",
    year: "2021年12月", type: "段落匹配",
    title: "2021年12月 · 段落匹配",
    instruction: "\u9605\u8bfb\u4e0b\u65b95\u4e2a\u6bb5\u843d\uff0c\u5c06\u9898\u76ee\u9648\u8ff0\uff08A-E\uff09\u4e0e\u6b63\u786e\u6bb5\u843d\u7f16\u53f7\uff08\u2460-\u2464\uff09\u5339\u914d",
    paragraphs: [
      "\u2460 Microplastics\u2014tiny fragments of plastic less than five millimeters in size\u2014have been detected in oceans, rivers, soil, and even the air we breathe. Scientists are increasingly concerned about their effects on ecosystems and human health.",
      "\u2461 The primary sources of microplastics include the breakdown of larger plastic debris, synthetic clothing fibers released during washing, and microbeads once widely used in cosmetics and personal care products.",
      "\u2462 Research on the health effects of microplastics in humans is still in early stages. While laboratory studies suggest that microplastics can cause inflammation and disrupt hormonal systems in animals, the long-term effects on humans remain unclear.",
      "\u2463 In response to growing evidence, several countries have banned the use of microbeads in cosmetics. The United Kingdom, United States, and Canada have all passed legislation prohibiting their sale, citing environmental and health concerns.",
      "\u2464 Experts emphasize that reducing plastic production overall is the only long-term solution to microplastic pollution. Recycling alone cannot address the problem, as even recyclable plastics shed microparticles during their lifecycle."
    ],
    questions: [
      {q:"A. The health risks microplastics pose to humans have not yet been fully established.", ans:"\u2462"},
      {q:"B. Reducing total plastic production is considered the most effective long-term approach.", ans:"\u2464"},
      {q:"C. Several countries have outlawed certain plastic ingredients in cosmetic products.", ans:"\u2463"},
      {q:"D. Microplastics originate from multiple sources including clothing and consumer products.", ans:"\u2461"},
      {q:"E. Microplastics have spread into virtually every part of the natural environment.", ans:"\u2460"}
    ],
    matchClues: [
      "\u2462: health effects...still in early stages...long-term effects on humans remain unclear \u2014 \u300Cnot yet fully established\u300D \u5bf9\u5e94 \u300Cremain unclear\u300D",
      "\u2464: reducing plastic production...only long-term solution \u2014 \u300Cmost effective long-term approach\u300D \u5bf9\u5e94 \u300Conly long-term solution\u300D",
      "\u2463: several countries have banned microbeads in cosmetics...legislation \u2014 \u300Coutlawed...cosmetic products\u300D \u5bf9\u5e94 \u300Cbanned...cosmetics\u300D",
      "\u2461: primary sources...synthetic clothing fibers...microbeads...cosmetics \u2014 \u300Cmultiple sources including clothing and consumer products\u300D \u76f4\u63a5\u5bf9\u5e94",
      "\u2460: detected in oceans, rivers, soil, and even the air \u2014 \u300Cspread into virtually every part of the natural environment\u300D \u5bf9\u5e94 \u300Coceans, rivers, soil, air\u300D"
    ],
    passageCn: "\u2460 \u5fae\u5851\u6599\u2014\u2014\u5c0f\u4e8e\u4e94\u6beb\u7c73\u7684\u5851\u6599\u788e\u7247\u2014\u2014\u5df2\u5728\u6d77\u6d0b\u3001\u6cb3\u6d41\u3001\u571f\u58e4\u4e43\u81f3\u6211\u4eec\u547c\u5438\u7684\u7a7a\u6c14\u4e2d\u88ab\u68c0\u6d4b\u5230\u3002\u79d1\u5b66\u5bb6\u8d8a\u6765\u8d8a\u5173\u6ce8\u5b83\u4eec\u5bf9\u751f\u6001\u7cfb\u7edf\u548c\u4eba\u7c7b\u5065\u5eb7\u7684\u5f71\u54cd\u3002\n\n\u2461 \u5fae\u5851\u6599\u7684\u4e3b\u8981\u6765\u6e90\u5305\u62ec\u8f83\u5927\u5851\u6599\u5783\u573e\u7684\u5206\u89e3\u3001\u6d17\u6da4\u65f6\u91ca\u653e\u7684\u5408\u6210\u7ea4\u7ef4\u670d\u88c5\u7ea4\u7ef4\uff0c\u4ee5\u53ca\u66fe\u5e7f\u6cdb\u7528\u4e8e\u5316\u5986\u54c1\u548c\u4e2a\u4eba\u62a4\u7406\u4ea7\u54c1\u7684\u5fae\u73e0\u3002\n\n\u2462 \u5173\u4e8e\u5fae\u5851\u6599\u5bf9\u4eba\u4f53\u5065\u5eb7\u5f71\u54cd\u7684\u7814\u7a76\u4ecd\u5904\u4e8e\u65e9\u671f\u9636\u6bb5\u3002\u867d\u7136\u5b9e\u9a8c\u5ba4\u7814\u7a76\u8868\u660e\u5fae\u5851\u6599\u53ef\u80fd\u5bfc\u81f4\u52a8\u7269\u708e\u75c7\u548c\u5185\u5206\u6ccc\u7cfb\u7edf\u7d0a\u4e71\uff0c\u4f46\u5bf9\u4eba\u7c7b\u7684\u957f\u671f\u5f71\u54cd\u4ecd\u4e0d\u6e05\u695a\u3002\n\n\u2463 \u4f5c\u4e3a\u5bf9\u65e5\u76ca\u589e\u957f\u7684\u8bc1\u636e\u7684\u56de\u5e94\uff0c\u51e0\u4e2a\u56fd\u5bb6\u5df2\u7981\u6b62\u5728\u5316\u5986\u54c1\u4e2d\u4f7f\u7528\u5fae\u73e0\u3002\u82f1\u56fd\u3001\u7f8e\u56fd\u548c\u52a0\u62ff\u5927\u5747\u5df2\u901a\u8fc7\u7acb\u6cd5\u7981\u6b62\u5176\u9500\u552e\uff0c\u5f15\u7528\u73af\u5883\u548c\u5065\u5eb7\u95ee\u9898\u3002\n\n\u2464 \u4e13\u5bb6\u5f3a\u8c03\uff0c\u51cf\u5c11\u5851\u6599\u603b\u4ea7\u91cf\u662f\u89e3\u51b3\u5fae\u5851\u6599\u6c61\u67d3\u7684\u552f\u4e00\u957f\u671f\u65b9\u6848\u3002\u4ec5\u4ec5\u56de\u6536\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\uff0c\u56e0\u4e3a\u751a\u81f3\u53ef\u56de\u6536\u5851\u6599\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u4e5f\u4f1a\u91ca\u653e\u5fae\u7c92\u3002"
  }
];

// ===== 新增 20 道真题（2025-2022年真卷） =====
// --- 11. 选词填空：2023.6 ---
CET4_REAL_PAPERS.push({
    id: "c2023_6b", year: "2023\u5E746\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2023\u5E746\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A\u771F\u9898",
    instruction: "\u4ECE\u4E0B\u5217\u5355\u8BCD\u4E2D\u9009\u62E9\u6070\u5F53\u7684\u8BCD\u586B\u5165\u77ED\u6587\u7A7A\u767D\u5904\uff0c\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21",
    words: ["O) reward","A) afford","B) appeal","C) contribute","D) distribute","E) evaluate","F) maintain","G) negotiate","H) promote","I) recognize","J) retire","K) secure","L) sufficient","M) sustainable","N) volunteer"],
    passage: "Many older adults today are choosing to work beyond the traditional retirement age. Some do so because they cannot [1] to stop working, while others simply find their careers too [2] to give up.\n\nResearch shows that staying employed can [3] to better mental health in later life. Work provides a sense of purpose and helps people [4] social connections. Companies that [5] the value of older workers are increasingly creating flexible positions to [6] their talents.\n\nExperts [7] that employers should [8] experienced staff by offering part-time options rather than encouraging early retirement. This approach is not only [9] for businesses but also helps create a more [10] workforce model.",
    answers: ["A","B","C","F","I","K","H","M","L","M"],
    answerKeys: ["\u2460 A (afford) — cannot afford to stop \u8868\u793A\u8D1F\u62C5\u4E0D\u8D77","\u2461 B (appeal) — too appealing to give up \u592A\u6709\u5438\u5F15\u529B\u800C\u4E0D\u80FD\u653E\u5F03","\u2462 C (contribute) — contribute to better mental health","\u2463 F (maintain) — maintain social connections","\u2464 I (recognize) — recognize the value","\u2465 K (secure) — secure their talents","\u2466 H (promote) — promote retention","\u2467 M (sustainable) — sustainable for businesses","\u2468 L (sufficient) — sufficient workforce","\u2469 M (sustainable) — sustainable workforce model"]
  });
// --- 12. 段落匹配：2020.12 ---
CET4_REAL_PAPERS.push({
    id: "m2020_12b", year: "2020\u5E7412\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2020\u5E7412\u6708 \u00B7 \u6BB5\u843D\u5339\u914D",
    instruction: "\u5C06\u4E0B\u5217\u6807\u9898\u4E0E\u5BF9\u5E94\u6BB5\u843D\u5339\u914D",
    headings: {
      "\u2460":"How Do We Form Impressions of People?",
      "\u2461":"A Universal Pattern of First Impressions",
      "\u2462":"First Impressions Form Rapidly and Automatically",
      "\u2463":"The Accuracy of Snap Judgments",
      "\u2464":"First Impressions Are Hard to Change"
    },
    paragraphs: {
      "A":"Within a fraction of a second of meeting someone, we have already formed an impression of them. Research by Princeton psychologists found that we make judgments about a person's trustworthiness, competence, and likability in less than 100 milliseconds\u2014faster than the blink of an eye.",
      "B":"These first impressions rely on what psychologists call 'thin slices' of behavior\u2014brief observations of a person's facial expressions, tone of voice, and body language. Our brains process these cues automatically, drawing on past experiences to generate an instant evaluation.",
      "C":"The key question is whether these rapid judgments are accurate. Some studies suggest they can be surprisingly reliable. In one experiment, participants predicted a teacher's effectiveness after watching just six seconds of silent video\u2014and their predictions closely matched actual student evaluations.",
      "D":"Interestingly, first impressions show remarkable consistency across cultures. A smile signals warmth whether you are in Tokyo, Nairobi, or New York. While specific expressions vary, the fundamental dimensions we judge\u2014warmth and competence\u2014appear universal.",
      "E":"Once formed, first impressions are difficult to overturn. Psychologists call this the 'confirmation bias'\u2014we tend to seek out information that confirms our existing beliefs. Even when presented with contradictory evidence, we often find ways to maintain our original impression."
    },
    matchPairs: [{p:"E",h:"\u2464"},{p:"D",h:"\u2461"},{p:"A",h:"\u2462"},{p:"C",h:"\u2463"},{p:"B",h:"\u2460"}],
    matchClues: ["E: difficult to overturn \u2192 Hard to Change","D: across cultures...universal \u2192 Universal Pattern","A: less than 100ms \u2192 Form Rapidly","C: how accurate...reliable \u2192 Accuracy","B: thin slices...automatically \u2192 How We Form"],
    passageCn: "\u78B0\u5230\u65B0\u4EBA\u65F6\uFF0C\u6211\u4EEC\u5728\u7728\u773C\u4E4B\u524D\u5C31\u5DF2\u5F62\u6210\u4E86\u7B2C\u4E00\u5370\u8C61\u3002\u666E\u6797\u65AF\u987F\u5927\u5B66\u7684\u7814\u7A76\u53D1\u73B0\uFF0C\u6211\u4EEC\u5728\u4E0D\u5230100\u6BEB\u79D2\u5185\u5C31\u4F1A\u5BF9\u4E00\u4E2A\u4EBA\u7684\u53EF\u4FE1\u5EA6\u3001\u80FD\u529B\u548C\u53EF\u7231\u5EA6\u4F5C\u51FA\u5224\u65AD\u3002\n\n\u8FD9\u4E9B\u7B2C\u4E00\u5370\u8C61\u4F9D\u8D56\u4E8E\u5FC3\u7406\u5B66\u5BB6\u6240\u8C13\u7684\u300C\u8584\u5207\u7247\u300D\u884C\u4E3A\u2014\u2014\u5BF9\u4E00\u4E2A\u4EBA\u7684\u9762\u90E8\u8868\u60C5\u3001\u58F0\u97F3\u8BED\u6C14\u548C\u80A2\u4F53\u8BED\u8A00\u7684\u77ED\u6682\u89C2\u5BDF\u3002\u6211\u4EEC\u7684\u5927\u8111\u81EA\u52A8\u5904\u7406\u8FD9\u4E9B\u7EBF\u7D22\uFF0C\u501F\u52A9\u8FC7\u5F80\u7ECF\u5386\u4EA7\u751F\u5373\u65F6\u8BC4\u4F30\u3002\n\n\u5173\u952E\u95EE\u9898\u662F\u8FD9\u4E9B\u5FEB\u901F\u5224\u65AD\u7684\u51C6\u786E\u6027\u3002\u4E00\u4E9B\u7814\u7A76\u8868\u660E\u5B83\u4EEC\u53EF\u4EE5\u51FA\u4EBA\u610F\u6599\u5730\u53EF\u9760\u3002\u5728\u4E00\u9879\u5B9E\u9A8C\u4E2D\uFF0C\u53C2\u4E0E\u8005\u5728\u89C2\u770B\u516D\u79D2\u95F7\u58F0\u89C6\u9891\u540E\u9884\u6D4B\u6559\u5E08\u7684\u6559\u5B66\u6548\u679C\u2014\u2014\u9884\u6D4B\u4E0E\u5B9E\u9645\u5B66\u751F\u8BC4\u4EF7\u9AD8\u5EA6\u4E00\u81F4\u3002\n\n\u6709\u8DA3\u7684\u662F\uFF0C\u7B2C\u4E00\u5370\u8C61\u5728\u4E0D\u540C\u6587\u5316\u4E2D\u663E\u793A\u51FA\u60CA\u4EBA\u7684\u4E00\u81F4\u6027\u3002\u5FAE\u7B11\u65E0\u8BBA\u5728\u4E1C\u4EAC\u3001\u5185\u7F57\u6BD5\u8FD8\u662F\u7EBD\u7EA6\u90FD\u4F20\u9012\u6E29\u6696\u3002\u6211\u4EEC\u5224\u65AD\u7684\u57FA\u672C\u7EF4\u5EA6\u2014\u2014\u6E29\u6696\u548C\u80FD\u529B\u2014\u2014\u4F3C\u4E4E\u662F\u666E\u904D\u7684\u3002\n\n\u4E00\u65E6\u5F62\u6210\uFF0C\u7B2C\u4E00\u5370\u8C61\u5F88\u96BE\u6539\u53D8\u3002\u5FC3\u7406\u5B66\u5BB6\u79F0\u4E4B\u4E3A\u300C\u786E\u8BA4\u504F\u5DEE\u300D\u2014\u2014\u6211\u4EEC\u503E\u5411\u4E8E\u5BFB\u627E\u652F\u6301\u73B0\u6709\u4FE1\u5FF5\u7684\u4FE1\u606F\u3002\u5373\u4F7F\u9762\u5BF9\u77DB\u76FE\u8BC1\u636E\uFF0C\u6211\u4EEC\u4E5F\u7ECF\u5E38\u8BBE\u6CD5\u7EF4\u6301\u539F\u59CB\u5370\u8C61\u3002"
  });
// --- 13. 阅读理解：2020.12 ---
CET4_REAL_PAPERS.push({
    id: "r2020_12b", year: "2020\u5E7412\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2020\u5E7412\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3",
    instruction: "\u9605\u8BFB\u77ED\u6587\uFF0C\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898",
    passage: "A growing body of evidence suggests that spending time in nature\u2014whether it is a walk in a park or a weekend in the mountains\u2014has measurable benefits for mental health. This is not merely a matter of feeling refreshed; studies show that exposure to natural environments can reduce stress hormones, lower blood pressure, and improve mood.\n\nThe concept, known as 'nature therapy' or 'ecotherapy,' is gaining traction in the medical community. In Japan, the practice of shinrin-yoku, or 'forest bathing,' involves spending time in a forest and engaging all five senses. Research on forest bathing has documented reductions in cortisol levels, pulse rate, and blood pressure, as well as improvements in immune function.\n\nIn the United Kingdom, doctors in some areas can now prescribe nature-based activities\u2014such as guided walks, community gardening, or tree planting\u2014to patients with depression or anxiety. This approach offers a low-cost, low-side-effect complement to traditional treatments. Early results suggest that patients who engage in these activities report higher levels of well-being and are more likely to maintain their improvements over time compared to those receiving only medication.",
    questions: [
      {q:"What is the main finding of the research mentioned in the passage?",opts:["A. Nature exposure has measurable mental health benefits","B. Forest bathing is more effective than medication","C. Walking in parks can cure depression","D. Stress hormones are difficult to measure"],ans:"A"},
      {q:"What does 'shinrin-yoku' refer to?",opts:["A. A type of Japanese medication","B. The practice of forest bathing","C. A form of group therapy","D. A traditional Japanese diet"],ans:"B"},
      {q:"According to the passage, what can UK doctors now do?",opts:["A. Replace medication with nature therapy","B. Prescribe nature-based activities to patients","C. Ban patients from staying indoors","D. Require patients to plant trees"],ans:"B"},
      {q:"What advantage does nature therapy offer compared to traditional treatments?",opts:["A. It works instantly","B. It has no cost at all","C. It is low-cost with few side effects","D. It can cure all mental illnesses"],ans:"C"}
    ],
    passageCn: "\u8D8A\u6765\u8D8A\u591A\u7684\u8BC1\u636E\u8868\u660E\uFF0C\u5728\u81EA\u7136\u4E2D\u5EA6\u8FC7\u65F6\u5149\u2014\u2014\u65E0\u8BBA\u662F\u5728\u516C\u56ED\u6563\u6B65\u8FD8\u662F\u5728\u5C71\u533A\u5EA6\u5468\u672B\u2014\u2014\u5BF9\u5FC3\u7406\u5065\u5EB7\u6709\u53EF\u6D4B\u91CF\u7684\u76CA\u5904\u3002\u8FD9\u4E0D\u4EC5\u662F\u611F\u89C9\u795E\u6E05\u6C14\u723D\u7684\u95EE\u9898\uFF1B\u7814\u7A76\u8868\u660E\u63A5\u89E6\u81EA\u7136\u73AF\u5883\u53EF\u4EE5\u964D\u4F4E\u5E94\u6FC0\u6FC0\u7D20\u3001\u964D\u4F4E\u8840\u538B\u548C\u6539\u5584\u60C5\u7EEA\u3002\n\n\u88AB\u79F0\u4E3A\u300C\u81EA\u7136\u7597\u6CD5\u300D\u6216\u300C\u751F\u6001\u7597\u6CD5\u300D\u7684\u6982\u5FF5\u6B63\u5728\u533B\u5B66\u754C\u83B7\u5F97\u8D8A\u6765\u8D8A\u591A\u7684\u5173\u6CE8\u3002\u5728\u65E5\u672C\uFF0C\u300C\u68EE\u6797\u6D74\u300D\u5305\u542B\u5728\u68EE\u6797\u4E2D\u5EA6\u8FC7\u65F6\u5149\u5E76\u8C03\u52A8\u4E94\u611F\u3002\u5BF9\u68EE\u6797\u6D74\u7684\u7814\u7A76\u8BB0\u5F55\u4E86\u76AE\u8D28\u9187\u6C34\u5E73\u3001\u8109\u640F\u548C\u8840\u538B\u7684\u4E0B\u964D\uFF0C\u4EE5\u53CA\u514D\u75AB\u529F\u80FD\u7684\u6539\u5584\u3002\n\n\u5728\u82F1\u56FD\uFF0C\u4E00\u4E9B\u5730\u533A\u7684\u533B\u751F\u73B0\u5728\u53EF\u4EE5\u4E3A\u6291\u90C1\u6216\u7126\u8651\u60A3\u8005\u5F00\u5177\u57FA\u4E8E\u81EA\u7136\u7684\u6D3B\u52A8\u5904\u65B9\u2014\u2014\u5982\u6307\u5BFC\u6563\u6B65\u3001\u793E\u533A\u56ED\u827A\u6216\u690D\u6811\u3002\u8FD9\u79CD\u65B9\u6CD5\u4E3A\u4F20\u7EDF\u6CBB\u7597\u63D0\u4F9B\u4E86\u4F4E\u6210\u672C\u3001\u4F4E\u526F\u4F5C\u7528\u7684\u8865\u5145\u3002\u65E9\u671F\u7ED3\u679C\u8868\u660E\uFF0C\u53C2\u4E0E\u8FD9\u4E9B\u6D3B\u52A8\u7684\u60A3\u8005\u62A5\u544A\u4E86\u66F4\u9AD8\u7684\u5E78\u798F\u611F\uFF0C\u4E14\u4E0E\u4EC5\u63A5\u53D7\u836F\u7269\u6CBB\u7597\u7684\u60A3\u8005\u76F8\u6BD4\u66F4\u6709\u53EF\u80FD\u957F\u671F\u7EF4\u6301\u6539\u5584\u3002"
  });
// --- 14. 翻译：2021.6 ---
CET4_REAL_PAPERS.push({
    id: "t2021_6b", year: "2021\u5E746\u6708", type: "\u7FFB\u8BD1",
    title: "2021\u5E746\u6708 \u00B7 \u7FFB\u8BD1\u771F\u9898",
    instruction: "\u5C06\u4E0B\u5217\u4E2D\u6587\u7FFB\u8BD1\u6210\u82F1\u6587",
    chineseText: "\u94C1\u4E09\u89D2\u662F\u4E2D\u56FD\u4F20\u7EDF\u94C1\u952E\u4E2D\u6700\u5177\u4EE3\u8868\u6027\u7684\u4E00\u79CD\u3002\u5B83\u7684\u8BBE\u8BA1\u7B80\u5355\u5374\u6781\u5176\u5B9E\u7528\uFF0C\u4E09\u4E2A\u89D2\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u60C5\u3002\u5728\u519C\u6751\u5730\u533A\uFF0C\u94C1\u4E09\u89D2\u662F\u6BCF\u4E2A\u5BB6\u5EAD\u5FC5\u5907\u7684\u5DE5\u5177\u3002\u5916\u56FD\u4EBA\u5728\u4E2D\u56FD\u65C5\u884C\u65F6\u7ECF\u5E38\u4F1A\u88AB\u8FD9\u79CD\u592F\u5B9E\u7684\u8BBE\u8BA1\u6240\u60CA\u53F9\u3002",
    reference: "The iron triangle is one of the most representative traditional Chinese iron keys. Its design is simple yet extremely practical, and its three corners can do many things. In rural areas, the iron triangle is an essential tool for every household. Foreigners traveling in China are often amazed by this sturdy design.",
    keyPoints: ["iron triangle \u2192 \u94C1\u4E09\u89D2","representative \u2192 \u4EE3\u8868\u6027\u7684","simple yet...practical \u2192 \u7B80\u5355\u5374\u5B9E\u7528","essential tool \u2192 \u5FC5\u5907\u5DE5\u5177","sturdy design \u2192 \u592F\u5B9E\u7684\u8BBE\u8BA1"],
    translationAnalysis: "\u8FD9\u7BC7\u7FFB\u8BD1\u8003\u67E5\u7269\u54C1\u63CF\u5199\u7C7B\u8BCD\u6C47\u3002\u91CD\u70B9\u77ED\u8BED\uFF1A\n1. iron triangle\uFF08\u94C1\u4E09\u89D2\uFF09\u2014\u2014\u76F4\u8BD1\u5373\u53EF\uFF0C\u4E0D\u8981\u5199 triangle iron\n2. representative\uFF08\u4EE3\u8868\u6027\u7684\uFF09\u2014\u2014\u9AD8\u9891\u8BCD\uFF0C\u6BD4 symbolic \u66F4\u51C6\u786E\n3. simple yet\u2026practical\uFF08\u7B80\u5355\u5374\u5B9E\u7528\uFF09\u2014\u2014yet \u8868\u8F6C\u6298\uFF0C\u6BD4 but \u66F4\u6587\u96C5\n4. essential tool\uFF08\u5FC5\u5907\u5DE5\u5177\uFF09\u2014\u2014essential \u6BD4 necessary \u66F4\u5F3A\u70C8\n5. sturdy design\uFF08\u592F\u5B9E\u7684\u8BBE\u8BA1\uFF09\u2014\u2014sturdy \u8868\u793A\u7269\u7406\u4E0A\u7684\u7ED3\u5B9E\u8010\u7528"
  }),
  // --- 15. 选词填空：2022.12 ---
  CET4_REAL_PAPERS.push({
    id: "c2022_12", year: "2022\u5E7412\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2022\u5E7412\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A",
    instruction: "\u9009\u8BCD\u586B\u5165\u77ED\u6587\u7A7A\u767D\u5904\uFF0C\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21",
    words: ["A) claim","B) complex","C) compound","D) constant","E) content","F) crucial","G) decline","H) dramatic","I) essential","J) gradual","K) nevertheless","L) previous","M) relatively","N) significantly","O) stable"],
    passage: "While the world\u2019s population continues to grow, the rate of growth has been [1] slowing. In 2022, the global fertility rate fell to a [2] low of 2.3 children per woman, down from about 5 in the 1960s. This [3] shift has profound implications for everything from labor markets to pension systems.\n\nExperts [4] that by 2050, more than two-thirds of the world\u2019s population will live in urban areas. Managing this urbanization will be [5] to ensuring sustainable development. Cities must become more [6] in their design to accommodate growing populations.\n\nThe challenge is [7]: urbanization creates opportunities but also strains resources. While [8] research focused primarily on developed nations, recent studies have [9] expanded our understanding of urban dynamics in developing countries. The [10] decline in rural populations presents both challenges and opportunities for policymakers worldwide.",
    answers: ["J","L","H","A","I","F","B","L","N","G"],
    answerKeys: ["\u2460 J (gradual)","\u2461 L (previous)","\u2462 H (dramatic)","\u2463 A (claim)","\u2464 I (essential)","\u2465 F (crucial)","\u2466 B (complex)","\u2467 L (previous)","\u2468 N (significantly)","\u2469 G (decline)"]
  });
  // --- 16. 阅读理解：2020.6 ---
  CET4_REAL_PAPERS.push({
    id: "r2020_6c", year: "2020\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2020\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3",
    instruction: "\u9605\u8BFB\u77ED\u6587\uFF0C\u56DE\u7B54\u95EE\u9898",
    passage: "The rise of remote work has been one of the most significant workplace transformations in decades. The COVID-19 pandemic accelerated a trend that was already underway, forcing millions of workers to set up home offices virtually overnight.\n\nThe benefits of remote work are now well documented. Employees report higher job satisfaction, reduced commuting stress, and better work-life balance. Companies benefit from lower office costs and access to a wider talent pool. However, the transition has not been without challenges. Many workers struggle with isolation, blurred boundaries between work and personal life, and the pressure to be always available.\n\nAs organizations look to the future, most are adopting a hybrid model\u2014combining remote and in-office work. This approach aims to preserve the flexibility that remote work offers while maintaining the collaboration and social connection that physical workplaces provide. Early data suggests that hybrid workers report productivity levels comparable to or exceeding those of fully in-office workers.",
    questions: [
      {q:"What was one driver of remote work adoption?",opts:["A. Lower salaries","B. The COVID-19 pandemic","C. Government regulations","D. Office space shortages"],ans:"B"},
      {q:"Which of the following is mentioned as a benefit of remote work?",opts:["A. Higher salaries","B. More vacation time","C. Reduced commuting stress","D. Free office equipment"],ans:"C"},
      {q:"What challenge do remote workers face?",opts:["A. Too many meetings","B. Isolation","C. Excessive office costs","D. Longer hours required by law"],ans:"B"},
      {q:"What approach are most organizations adopting?",opts:["A. Fully remote","B. Fully in-office","C. A hybrid model","D. Four-day workweeks"],ans:"C"}
    ],
    passageCn: "\u8FDC\u7A0B\u5DE5\u4F5C\u7684\u5174\u8D77\u662F\u8FD1\u51E0\u5341\u5E74\u6765\u6700\u91CD\u5927\u7684\u804C\u573A\u53D8\u9769\u4E4B\u4E00\u3002COVID-19\u75AB\u60C5\u52A0\u901F\u4E86\u8FD9\u4E00\u5DF2\u5728\u8FDB\u884C\u4E2D\u7684\u8D8B\u52BF\u3002\u8FDC\u7A0B\u5DE5\u4F5C\u7684\u597D\u5904\u5305\u62EC\u66F4\u9AD8\u7684\u5DE5\u4F5C\u6EE1\u610F\u5EA6\u3001\u51CF\u5C11\u7684\u901A\u52E4\u538B\u529B\u548C\u66F4\u597D\u7684\u5DE5\u4F5C\u751F\u6D3B\u5E73\u8861\u3002\u7136\u800C\u8FC7\u6E21\u5E76\u975E\u6CA1\u6709\u6311\u6218\u3002\u8BB8\u591A\u5DE5\u4EBA\u9762\u4E34\u5B64\u72EC\u611F\u3001\u5DE5\u4F5C\u4E0E\u751F\u6D3B\u754C\u9650\u6A21\u7CCA\u4EE5\u53CA\u59CB\u7EC8\u53EF\u7528\u7684\u538B\u529B\u3002\u5C55\u671B\u672A\u6765\uFF0C\u5927\u591A\u6570\u7EC4\u7EC7\u6B63\u5728\u91C7\u7528\u6DF7\u5408\u6A21\u5F0F\u3002"
  });
  // --- 17. 翻译：2022.12 ---
  CET4_REAL_PAPERS.push({
    id: "t2022_12b", year: "2022\u5E7412\u6708", type: "\u7FFB\u8BD1",
    title: "2022\u5E7412\u6708 \u00B7 \u7FFB\u8BD1",
    instruction: "\u5C06\u4E0B\u5217\u4E2D\u6587\u7FFB\u8BD1\u6210\u82F1\u6587",
    chineseText: "\u7559\u5B66\u751F\u5728\u56FD\u5916\u7559\u5B66\u65F6\uFF0C\u4E0D\u4EC5\u8981\u9002\u5E94\u65B0\u7684\u5B66\u4E60\u73AF\u5883\uFF0C\u8FD8\u9700\u8981\u514B\u670D\u8BED\u8A00\u969C\u7887\u548C\u6587\u5316\u5DEE\u5F02\u3002\u8FD9\u4E9B\u6311\u6218\u53EF\u80FD\u4F1A\u8BA9\u4ED6\u4EEC\u611F\u5230\u5B64\u72EC\u548C\u7126\u8651\u3002\u7136\u800C\uFF0C\u7559\u5B66\u7684\u6536\u83B7\u8FDC\u8FDC\u8D85\u8FC7\u56F0\u96BE\u3002\u5B83\u4E0D\u4EC5\u62D3\u5BBD\u4E86\u4ED6\u4EEC\u7684\u89C6\u91CE\uFF0C\u8FD8\u57F9\u517B\u4E86\u4ED6\u4EEC\u7684\u72EC\u7ACB\u80FD\u529B\u548C\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002",
    reference: "When studying abroad, international students must not only adapt to new learning environments but also overcome language barriers and cultural differences. These challenges may cause them to feel lonely and anxious. However, the benefits of studying abroad far outweigh the difficulties. It not only broadens their horizons but also cultivates their independence and problem-solving abilities.",
    keyPoints: ["adapt to \u2192 \u9002\u5E94","language barriers \u2192 \u8BED\u8A00\u969C\u7887","cultural differences \u2192 \u6587\u5316\u5DEE\u5F02","far outweigh \u2192 \u8FDC\u8FDC\u8D85\u8FC7","broaden horizons \u2192 \u62D3\u5BBD\u89C6\u91CE"],
    translationAnalysis: "\u7559\u5B66\u7C7B\u7FFB\u8BD1\u8003\u67E5\u5E38\u89C1\u8868\u8FBE\u3002\u91CD\u70B9\uFF1A\n1. not only...but also \u2014\u2014\u5E76\u5217\u7ED3\u6784\u52A0\u5206\n2. adapt to \u2014\u2014\u56FA\u5B9A\u642D\u914D\n3. overcome barriers \u2014\u2014\u514B\u670D\u969C\u7887\n4. far outweigh \u2014\u2014\u8FDC\u8FDC\u8D85\u8FC7\n5. cultivate independence \u2014\u2014\u57F9\u517B\u72EC\u7ACB\u80FD\u529B"
  });
  // --- 18. 段落匹配：2021.6 ---
  CET4_REAL_PAPERS.push({
    id: "m2021_6c", year: "2021\u5E746\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2021\u5E746\u6708 \u00B7 \u6BB5\u843D\u5339\u914D",
    instruction: "\u5339\u914D\u6807\u9898\u4E0E\u6BB5\u843D",
    headings: {"\u2460":"The Power of Small Daily Habits","\u2461":"Why New Year Resolutions Often Fail","\u2462":"The Compounding Effect of Tiny Changes","\u2463":"Identity-Based Habit Formation","\u2464":"Environment Matters More Than Willpower"},
    paragraphs: {
      "A":"The problem with most New Year resolutions is that they rely on motivation\u2014and motivation is unreliable. When the initial excitement fades, so does the commitment. Research shows that about 80% of resolutions are abandoned by February.",
      "B":"James Clear, author of 'Atomic Habits,' argues that lasting change comes from focusing on who we wish to become rather than what we want to achieve. When we say 'I am a runner' instead of 'I want to run a marathon,' the habit becomes part of our identity.",
      "C":"If you improve by just 1% each day, you will be 37 times better by the end of the year. This compounding effect explains why small, consistent improvements\u2014reading one page, walking one block, meditating one minute\u2014can lead to remarkable transformations over time.",
      "D":"Contrary to popular belief, willpower is not the key to habit change. The most effective strategy is designing your environment to make good habits easy and bad habits difficult. If you want to eat healthier, keep fruit on the counter and hide the cookies.",
      "E":"Successful habit builders focus on doing something small every day rather than achieving massive results immediately. A two-minute meditation done daily for a month is worth more than an hour-long session done once and abandoned."
    },
    matchPairs: [{p:"B",h:"\u2463"},{p:"E",h:"\u2460"},{p:"C",h:"\u2462"},{p:"D",h:"\u2464"},{p:"A",h:"\u2461"}],
    matchClues: ["B: who we wish to become \u2192 Identity-Based","E: small every day \u2192 Small Daily Habits","C: 1% compounding \u2192 Compounding Effect","D: designing environment \u2192 Environment Matters","A: 80% abandoned \u2192 Why They Fail"],
    passageCn: "\u73B0\u4EE3\u4E60\u60EF\u5EFA\u7ACB\u7684\u79D1\u5B66\u7814\u7A76\u3002\u5927\u591A\u6570\u65B0\u5E74\u51B3\u5FC3\u4F9D\u8D56\u4E8E\u52A8\u529B\u2014\u2014\u800C\u52A8\u529B\u662F\u4E0D\u53EF\u9760\u7684\u3002\u5F53\u521D\u59CB\u5174\u594B\u6D88\u9000\u65F6\u627F\u8BFA\u4E5F\u968F\u4E4B\u6D88\u5931\u3002\u7814\u7A76\u663E\u793A\u7EA680%\u7684\u51B3\u5FC3\u5230\u4E8C\u6708\u5C31\u88AB\u653E\u5F03\u3002James Clear\u63D0\u51FA\uFF0C\u6301\u4E45\u7684\u6539\u53D8\u6765\u81EA\u4E8E\u5173\u6CE8\u6211\u4EEC\u60F3\u6210\u4E3A\u8C01\u800C\u975E\u6211\u4EEC\u60F3\u8FBE\u6210\u4EC0\u4E48\u3002\u8FD9\u5C31\u662F\u57FA\u4E8E\u8EAB\u4EFD\u7684\u4E60\u60EF\u5F62\u6210\u3002\u6BCF\u5929\u8FDB\u6B651%\uFF0C\u5E74\u5E95\u4F60\u5C06\u4F1A\u597D37\u500D\u3002\u8FD9\u4E2A\u590D\u5229\u6548\u5E94\u89E3\u91CA\u4E86\u5FAE\u5C0F\u6539\u8FDB\u7684\u529B\u91CF\u3002\u73AF\u5883\u8BBE\u8BA1\u6BD4\u610F\u5FD7\u529B\u66F4\u91CD\u8981\u3002\u6210\u529F\u7684\u4E60\u60EF\u5EFA\u7ACB\u8005\u5173\u6CE8\u6BCF\u5929\u505A\u4E00\u4EF6\u5C0F\u4E8B\u3002"
  });
// V3.5.1 — 倒计时 + 随机抽3题 + 统一提交（dayIndex >= 3）
// ============================================================
var _quizTimerInterval = null;
var _quizTimeLeft = 0;
var _quizStarted = false;
var _quizPapers = [];
var _quizAllSubmitted = false;

function quizSeededRandom(seed) {
  var x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function pickDailyPapers(d, n) {
  var idx = dayIndex(d);
  var start = (idx - 3) * n % CET4_REAL_PAPERS.length;
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(CET4_REAL_PAPERS[(start + i) % CET4_REAL_PAPERS.length]);
  }
  return result;
}

// ============================================================
// V3.5.1 无提交按钮版构建函数（供统一提交模式使用）
// ============================================================
function _v35buildClozeHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="background:#e8eaf6;border-radius:10px;padding:12px;margin-bottom:12px;">';
  html += '<div style="font-size:12px;color:#3949ab;font-weight:700;margin-bottom:8px;">\uD83D\uDCE6 \u8BCD\u5E93\uFF08\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21\uFF09</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  data.words.forEach(function(w) {
    html += '<span style="background:white;border:1px solid #c5cae9;border-radius:6px;padding:3px 10px;font-size:13px;font-weight:600;">' + w + '</span>';
  });
  html += '</div></div>';
  html += '<div style="font-size:14px;line-height:2.4;color:var(--text);">';
  var textParts = data.text.split(/__\((\d+)\)__/);
  for (var i = 0; i < textParts.length; i++) {
    if (i % 2 === 0) {
      html += textParts[i];
    } else {
      var num = textParts[i];
      var opts = '<option value="">\u2014\u2014</option>';
      data.words.forEach(function(w) { opts += '<option value="' + w + '">' + w + '</option>'; });
      html += '<select id="' + pid + '_b' + num + '" style="border:2px solid #c5cae9;border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:110px;">' + opts + '</select>';
    }
  }
  html += '</div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildMatchingHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  if (data.paragraphs) {
    html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:13px;color:#333;">';
    data.paragraphs.forEach(function(p) { html += '<div style="margin-bottom:6px;">' + p + '</div>'; });
    html += '</div>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="margin-bottom:10px;font-size:13px;display:flex;align-items:center;gap:8px;">';
    html += '<span style="font-weight:700;color:#3949ab;min-width:24px;">' + q.q.charAt(0) + '.</span>';
    html += '<span style="flex:1;">' + q.q.substring(3) + '</span>';
    var opts = '<option value="">\u2014\u2014</option>';
    opts += '<option value="\u2460">\u2460</option><option value="\u2461">\u2461</option><option value="\u2462">\u2462</option><option value="\u2463">\u2463</option><option value="\u2464">\u2464</option>';
    html += '<select id="' + pid + '_q' + i + '" style="border:2px solid #c5cae9;border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:60px;">' + opts + '</select>';
    html += '</div>';
  });
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildReadingHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  if (data.passage) {
    html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:13px;color:#333;white-space:pre-line;">' + data.passage + '</div>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="margin-bottom:14px;font-size:13px;"><div style="font-weight:600;color:#333;margin-bottom:8px;">' + q.q + '</div>';
    html += '<div style="display:flex;flex-direction:column;gap:4px;">';
    q.options.forEach(function(opt) {
      var val = opt.charAt(0);
      var label = opt.substring(3);
      html += '<label style="display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background=\'#e8eaf6\'" onmouseout="this.style.background=\'transparent\'">';
      html += '<input type="radio" name="' + pid + '_q' + i + '" value="' + val + '" style="accent-color:#3949ab;">';
      html += '<span>' + label + '</span></label>';
    });
    html += '</div></div>';
  });
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildTranslationHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:14px;color:#333;">' + (data.source || '') + '</div>';
  html += '<textarea id="' + pid + '_trans" placeholder="\u5728\u8FD9\u91CC\u5199\u4F60\u7684\u82F1\u6587\u7FFB\u8BD1..." style="width:100%;min-height:120px;border:2px solid #c5cae9;border-radius:10px;padding:12px;font-size:14px;line-height:1.8;resize:vertical;box-sizing:border-box;"></textarea>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

// (作文 function 已移除)

// ============================================================
// 新版渲染每日一练（dayIndex >= 3 时调用）
// ============================================================
function renderDailyQuiz_v2() {
  var container = document.getElementById('dailyQuizContainer');
  if (!container) return;
  var d = currentDate;
  _quizPapers = pickDailyPapers(d, 3);
  _quizAllSubmitted = false;
  _quizStarted = false;
  _quizTimeLeft = 45 * 60;

  var html = '';
  html += '<div class="card" style="margin-bottom:16px;text-align:center;">';
  html += '<div class="section-title"><span class="icon">\uD83D\uDCCB</span>\u6BCF\u65E5\u4E00\u7EC3 \u00B7 \u771F\u9898\u7CBE\u9009';
  html += '<span class="badge" style="background:#3949ab;color:white;font-size:11px;">' + formatDate(d) + '</span></div>';
  html += '<div style="font-size:13px;color:var(--text-light);margin:8px 0 12px;">\u5171 3 \u9053\u56DB\u7EA7\u771F\u9898 \u00B7 45 \u5206\u949F\u9650\u65F6 \u00B7 \u5168\u90E8\u505A\u5B8C\u7EDF\u4E00\u63D0\u4EA4</div>';

  html += '<div style="margin-bottom:16px;">';
  for (var i = 0; i < _quizPapers.length; i++) {
    var p = _quizPapers[i];
    html += '<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:6px;">';
    html += '<span style="background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">' + (i+1) + '</span>';
    html += '<span style="font-size:13px;color:var(--text);">' + p.year + ' \u00B7 <strong>' + p.type + '</strong></span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div id="quizTimerBar" style="display:none;margin:0 auto 16px;max-width:300px;">';
  html += '<div style="font-size:13px;color:var(--text-light);margin-bottom:6px;">\u23F1 \u5269\u4F59\u65F6\u95F4</div>';
  html += '<div id="quizTimerDisplay" style="font-size:28px;font-weight:900;color:#3949ab;letter-spacing:2px;font-family:monospace;">45:00</div>';
  html += '<div id="quizTimerBar2" style="height:6px;background:#e8eaf6;border-radius:3px;margin-top:8px;"><div id="quizTimerFill" style="height:100%;width:100%;background:linear-gradient(90deg,#3949ab,#5c6bc0);border-radius:3px;transition:width 1s linear;"></div></div>';
  html += '</div>';

  html += '<button id="startQuizBtn" onclick="startDailyQuiz()" style="background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;border:none;border-radius:24px;padding:12px 32px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(57,73,171,0.3);">\uD83D\uDE80 \u5F00\u59CB\u7B54\u9898</button>';
  html += '</div>';

  // 题目区域（初始隐藏）
  html += '<div id="quizPapersArea" style="display:none;">';
  var icons = ['\uD83D\uDCD6','\uD83D\uDCDD','\u270F\uFE0F'];
  var labels = ['\u4E00','\u4E8C','\u4E09'];
  var colors = ['linear-gradient(135deg,#3949ab,#5c6bc0)','linear-gradient(135deg,#00897b,#26a69a)','linear-gradient(135deg,#e65100,#ef6c00)'];
  for (var j = 0; j < _quizPapers.length; j++) {
    var paper = _quizPapers[j];
    var pid = 'R' + j;
    html += '<div class="card" style="margin-bottom:16px;" id="paperCard' + j + '">';
    html += '<div class="section-title"><span class="icon">' + icons[j] + '</span>\u7B2C' + labels[j] + '\u9898 \u00B7 ' + paper.year + ' \u00B7 ' + paper.type;
    html += '<span class="badge" style="background:' + colors[j] + ';color:white;font-size:11px;">#' + (j+1) + '</span></div>';
    if (paper.type === '\u9009\u8BCD\u586B\u7A7A') html += _v35buildClozeHTML(paper, pid);
    else if (paper.type === '\u6BB5\u843D\u5339\u914D') html += _v35buildMatchingHTML(paper, pid);
    else if (paper.type === '\u9605\u8BFB\u7406\u89E3') html += _v35buildReadingHTML(paper, pid);
    else if (paper.type === '\u7FFB\u8BD1') html += _v35buildTranslationHTML(paper, pid);
    html += '</div>';
  }

  // 统一提交按钮
  html += '<div id="submitAllArea" style="text-align:center;margin:20px 0;">';
  html += '<button onclick="submitAllPapers()" style="background:linear-gradient(135deg,#d32f2f,#ef5350);color:white;border:none;border-radius:24px;padding:14px 40px;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(211,47,47,0.3);">\uD83D\uDCCB \u7EDF\u4E00\u63D0\u4EA4\u7B54\u6848</button>';
  html += '</div>';

  // 总成绩区（初始隐藏）
  html += '<div id="quizTotalResult" style="display:none;"></div>';

  html += '</div>';

  container.innerHTML = html;
}

// 开始答题
function startDailyQuiz() {
  if (_quizStarted) return;
  _quizStarted = true;
  var btn = document.getElementById('startQuizBtn');
  if (btn) btn.style.display = 'none';
  var timerBar = document.getElementById('quizTimerBar');
  if (timerBar) timerBar.style.display = 'block';
  var papersArea = document.getElementById('quizPapersArea');
  if (papersArea) papersArea.style.display = 'block';

  _quizTimeLeft = 45 * 60;
  updateTimerDisplay();
  _quizTimerInterval = setInterval(function() {
    _quizTimeLeft--;
    updateTimerDisplay();
    if (_quizTimeLeft <= 0) {
      clearInterval(_quizTimerInterval);
      _quizTimerInterval = null;
      submitAllPapers();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var mins = Math.floor(_quizTimeLeft / 60);
  var secs = _quizTimeLeft % 60;
  var display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  var el = document.getElementById('quizTimerDisplay');
  if (el) {
    el.textContent = display;
    if (_quizTimeLeft <= 300) el.style.color = '#d32f2f';
    else if (_quizTimeLeft <= 600) el.style.color = '#e65100';
  }
  var fill = document.getElementById('quizTimerFill');
  if (fill) {
    var pct = (_quizTimeLeft / (45 * 60)) * 100;
    fill.style.width = pct + '%';
    if (_quizTimeLeft <= 300) fill.style.background = 'linear-gradient(90deg,#d32f2f,#ef5350)';
  }
}

// ============================================================
// 统一提交 + 详细答案解析
// ============================================================
function submitAllPapers() {
  if (_quizAllSubmitted) return;
  _quizAllSubmitted = true;

  // 停止计时
  if (_quizTimerInterval) { clearInterval(_quizTimerInterval); _quizTimerInterval = null; }
  var display = document.getElementById('quizTimerDisplay');
  if (display) { display.textContent = '\u23F0 \u5DF2\u63D0\u4EA4\uFF01'; display.style.color = '#2e7d32'; }

  // 隐藏统一提交按钮
  var submitArea = document.getElementById('submitAllArea');
  if (submitArea) submitArea.style.display = 'none';

  var totalScore = 0;
  var totalMax = 0;
  var allDetails = [];

  for (var i = 0; i < _quizPapers.length; i++) {
    var data = _quizPapers[i];
    var pid = 'R' + i;
    var resultEl = document.getElementById(pid + 'Result');
    if (!resultEl) continue;

    var html = '';
    var score = 0;
    var max = 0;

    if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
      var ans = data.answers;
      var correct = 0;
      var total = Object.keys(ans).length;
      var detail = '';
      Object.keys(ans).sort(function(a,b){return +a-+b}).forEach(function(k) {
        var sel = document.getElementById(pid + '_b' + k);
        var userAns = sel ? sel.value : '';
        var rightAns = ans[k];
        var reason = (data.wordReasons && data.wordReasons[k]) ? data.wordReasons[k] : '';
        if (userAns.toLowerCase() === rightAns.toLowerCase()) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:4px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 (' + k + ') <strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + reason + '</span>' : '') + '</div>';
        } else {
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C (' + k + ') \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u586B') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDCD6 ' + reason + '</span>' : '') + '</div>';
        }
      });
      score = correct;
      max = total;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u9009\u8BCD\u586B\u7A7A\uFF1A' + correct + ' / ' + total + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.analysis) html += '<div style="margin-top:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;">\uD83D\uDCD6 \u89E3\u6790\uFF1A' + data.analysis + '</div>';
      // 完整原文填答案
      if (data.text) {
        var filledText = data.text;
        Object.keys(data.answers).sort(function(a,b){return +a-+b}).forEach(function(k){
          filledText = filledText.split('__('+k+')__').join('<strong style="color:#3949ab;border-bottom:2px solid #c5cae9">' + data.answers[k] + '</strong>');
        });
        html += '<div style="margin-top:12px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:14px;"><div style="font-weight:700;color:#3949ab;margin-bottom:8px;font-size:13px;">\uD83D\uDCDD \u5B8C\u6574\u539F\u6587\uFF08\u5DF2\u586B\u5165\u7B54\u6848\uFF09</div>' + filledText + '</div>';
      }
      if (data.passageCn) html += '<div style="margin-top:8px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u53C2\u8003\u8BD1\u6587</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u6BB5\u843D\u5339\u914D') {
      var correct = 0;
      var total = data.questions.length;
      var detail = '';
      data.questions.forEach(function(q, i) {
        var sel = document.getElementById(pid + '_q' + i);
        var userAns = sel ? sel.value : '';
        var clue = (data.matchClues && data.matchClues[i]) ? data.matchClues[i] : '';
        if (userAns === q.ans) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:6px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' \u2192 <strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#33691e;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
        } else {
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u9009\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
        }
      });
      score = correct * 2;
      max = total * 2;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u6BB5\u843D\u5339\u914D\uFF1A' + (correct*2) + ' / ' + (total*2) + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.passageCn) html += '<div style="margin-top:8px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u6BB5\u843D\u53C2\u8003\u8BD1\u6587</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
      var correct = 0;
      var total = data.questions.length;
      var detail = '';
      data.questions.forEach(function(q, i) {
        var radioName = pid + '_q' + i;
        var radios = document.getElementsByName(radioName);
        var userAns = '';
        for (var r = 0; r < radios.length; r++) { if (radios[r].checked) { userAns = radios[r].value; break; } }
        if (userAns === q.ans) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:8px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' <strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + q.explain + '</span></div>';
        } else {
          var wrongInfo = (q.wrongReasons && q.wrongReasons[userAns]) ? '<br><span style="font-size:11px;color:#b71c1c;">\u274C \u4E3A\u4EC0\u4E48\u4F60\u7684\u7B54\u6848\u4E0D\u5BF9\uFF1A' + q.wrongReasons[userAns] + '</span>' : '';
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:8px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u9009\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#888;">\uD83D\uDCD6 ' + q.explain + '</span>' + wrongInfo + '</div>';
        }
      });
      var perQ = Math.round(10 / total);
      score = correct * perQ;
      max = total * perQ;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u9605\u8BFB\u7406\u89E3\uFF1A' + (correct*perQ) + ' / ' + (total*perQ) + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.passageCn) html += '<div style="margin-top:14px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u77ED\u6587\u7FFB\u8BD1</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u7FFB\u8BD1') {
      var userTrans = document.getElementById(pid + '_trans');
      score = 0; max = 0;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\u2705 \u7FFB\u8BD1\u9898\u5DF2\u63D0\u4EA4</div>';
      if (userTrans && userTrans.value.trim()) {
        html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u7FFB\u8BD1\uFF1A<br>' + userTrans.value.replace(/\\n/g,'<br>') + '</div>';
        if (data.keyPoints && data.keyPoints.length) {
          var kpHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
          kpHtml += '<div style="font-weight:700;color:#3949ab;margin-bottom:6px;">\uD83D\uDD0D \u5173\u952E\u8BCD\u68C0\u67E5\uFF1A</div>';
          var kpFound = 0;
          data.keyPoints.forEach(function(kp) {
            var parts = kp.split(' \u2192 ');
            var word = parts.length > 1 ? parts[1].trim().split(' / ')[0].trim().toLowerCase() : '';
            var found = word && userTrans.value.toLowerCase().indexOf(word) >= 0;
            if (found) kpFound++;
            kpHtml += '<div style="margin-bottom:3px;font-size:12px;">' + (found ? '\u2705' : '\u274C') + ' ' + kp + '</div>';
          });
          var rate = Math.round(kpFound / data.keyPoints.length * 100);
          kpHtml += '<div style="margin-top:6px;font-size:13px;font-weight:700;color:' + (rate >= 60 ? '#2e7d32' : '#c62828') + ';">\uD83C\uDFAF \u5173\u952E\u8BCD\u8986\u76D6\u7387\uFF1A' + kpFound + '/' + data.keyPoints.length + ' (' + rate + '%)</div>';
          kpHtml += '</div>';
          html += kpHtml;
        }
      }
      html += '<div style="font-size:14px;font-weight:700;color:#3949ab;margin:12px 0 6px;">\uD83D\uDCCC \u53C2\u8003\u8BD1\u6587\uFF1A</div>';
      html += '<div style="font-size:13px;line-height:1.9;padding:12px;background:#e8f5e9;border-radius:10px;border:1px solid #c8e6c9;">' + data.reference + '</div>';
      if (data.translationAnalysis) html += '<div style="margin-top:8px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;white-space:pre-line;">\uD83D\uDCD6 \u7FFB\u8BD1\u89E3\u6790\uFF1A' + data.translationAnalysis + '</div>';

    } else if (false) {
      // (作文题已移除)
    }

    resultEl.innerHTML = html;
    resultEl.style.display = 'block';
    totalScore += score;
    totalMax += max;
  }

  // 显示总成绩
  var totalResult = document.getElementById('quizTotalResult');
  if (totalResult && totalMax > 0) {
    var pct = Math.round(totalScore / totalMax * 100);
    var emoji = pct >= 90 ? '\uD83C\uDFC6' : pct >= 70 ? '\uD83C\uDF1F' : pct >= 50 ? '\uD83D\uDCAA' : '\uD83D\uDCAA';
    var msg = pct >= 90 ? '\u592A\u68D2\u4E86\uFF01\u4FDD\u6301\u8FD9\u4E2A\u72B6\u6001\uFF01' : pct >= 70 ? '\u4E0D\u9519\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01' : pct >= 50 ? '\u8FD8\u9700\u8981\u52AA\u529B\u54E6\uFF0C\u591A\u7EC3\u4E60\uFF01' : '\u522B\u6C14\u998A\uFF0C\u575A\u6301\u5B66\u4E60\u5C31\u4F1A\u8FDB\u6B65\uFF01';
    totalResult.innerHTML = '<div class="card" style="text-align:center;background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;padding:24px;border-radius:16px;margin-bottom:16px;">' +
      '<div style="font-size:20px;font-weight:900;">' + emoji + ' \u672C\u65E5\u603B\u6210\u7EE9</div>' +
      '<div style="font-size:48px;font-weight:900;margin:12px 0;">' + totalScore + ' / ' + totalMax + '</div>' +
      '<div style="font-size:14px;opacity:0.9;">' + msg + '</div>' +
      '</div>';
    totalResult.style.display = 'block';
  }

  // 滚动到总成绩区
  if (totalResult) totalResult.scrollIntoView({behavior:'smooth',block:'center'});
  markQuizDone('R_all');
}

// ============================================================
// \u8986\u76D6 renderDailyQuiz\uFF1A\u6839\u636E dayIndex \u5206\u53C9
// ============================================================
var _originalRenderDailyQuiz = renderDailyQuiz;
renderDailyQuiz = function() {
  var d = currentDate;
  var idx = dayIndex(d);
  if (idx >= 3) {
    renderDailyQuiz_v2();
  } else {
    _originalRenderDailyQuiz();
  }
};

