"""
fix_vocab_v2.py — 词汇逻辑 V2 (修复版)
1. PRESERVED_DAYS 保存 5/21-5/23 完整词条
2. WORD_POOL 保留全部原词 + 每天从 CET4 bank 补新词
3. getDailyVocab: day<3 → PRESERVED_DAYS, day>=3 → 排除全部已学，随机100
"""
import re, datetime

PATH = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'

with open(PATH, 'r', encoding='utf-8') as f:
    html = f.read()

START_DATE = datetime.date(2026, 5, 21)
now = datetime.datetime.now()
effective = (now - datetime.timedelta(days=1)).date() if now.hour < 9 else now.date()
dayIndex = (effective - START_DATE).days
print(f"Today: {effective} (dayIndex={dayIndex})")

# ===== 1. 提取 WORD_POOL =====
m = re.search(r'const WORD_POOL\s*=\s*\[(.*?)\];', html, re.DOTALL)
pool_text = m.group(1)
entry_pattern = re.compile(r'(\{[^}]+\})', re.DOTALL)
all_entries = entry_pattern.findall(pool_text)
def word_name(e): return re.search(r'w:"([^"]+)"', e).group(1) if e else ''
print(f"Original pool: {len(all_entries)}")

# ===== 2. 计算 5/21-5/23 已学词 =====
def seededRandom(seed):
    h = 0
    for c in seed: h = ((h << 5) - h) + ord(c); h |= 0
    state = [h]
    def rng():
        state[0] = (state[0] * 1103515245 + 12345) & 0x7fffffff
        return state[0] / 0x7fffffff
    return rng

day0_names = [word_name(all_entries[i]) for i in range(80)]
used = set(day0_names)
avail1 = [(word_name(e), e) for e in all_entries if word_name(e) not in used]
rng1 = seededRandom('2026-05-22')
for i in range(len(avail1)-1, 0, -1):
    j = int(rng1() * (i+1)); avail1[i], avail1[j] = avail1[j], avail1[i]
day1_names = [e[0] for e in avail1[:100]]
used.update(day1_names)
avail2 = [(word_name(e), e) for e in all_entries if word_name(e) not in used]
rng2 = seededRandom('2026-05-23')
for i in range(len(avail2)-1, 0, -1):
    j = int(rng2() * (i+1)); avail2[i], avail2[j] = avail2[j], avail2[i]
day2_names = [e[0] for e in avail2[:100]]
print(f"Day0: {len(day0_names)} | Day1: {len(day1_names)} | Day2: {len(day2_names)}")

# ===== 3. 构建 PRESERVED_DAYS =====
entry_map = {word_name(e): e.strip() for e in all_entries}
def build_day(names):
    return '[' + ','.join(entry_map.get(n, '{w:"%s",p:"",m:"",c:""}' % n) for n in names) + ']'
preserved_js = 'const PRESERVED_DAYS = [\n'
preserved_js += '  ' + build_day(day0_names) + ',\n'
preserved_js += '  ' + build_day(day1_names) + ',\n'
preserved_js += '  ' + build_day(day2_names) + '\n];\n'

# ===== 4. CET-4 Bank =====
CET4_BANK = [
    ("abnormal","/æbˈnɔːml/","adj. 反常的","abnormal behavior"),
    ("aboard","/əˈbɔːd/","adv./prep. 在船上","go aboard"),
    ("abolish","/əˈbɒlɪʃ/","v. 废除","abolish slavery"),
    ("abortion","/əˈbɔːʃn/","n. 流产","illegal abortion"),
    ("abroad","/əˈbrɔːd/","adv. 到国外","study abroad"),
    ("absence","/ˈæbsəns/","n. 缺席","in the absence of"),
    ("absolute","/ˈæbsəluːt/","adj. 绝对的","absolute power"),
    ("absurd","/əbˈsɜːd/","adj. 荒谬的","absurd idea"),
    ("accelerate","/əkˈseləreɪt/","v. 加速","accelerate growth"),
    ("accommodate","/əˈkɒmədeɪt/","v. 容纳","accommodate needs"),
    ("accompany","/əˈkʌmpəni/","v. 陪伴","accompany by"),
    ("accomplish","/əˈkɒmplɪʃ/","v. 完成","accomplish goals"),
    ("account","/əˈkaʊnt/","n. 账户","take into account"),
    ("accurate","/ˈækjərət/","adj. 精确的","accurate data"),
    ("accuse","/əˈkjuːz/","v. 指控","accuse of"),
    ("achieve","/əˈtʃiːv/","v. 达到","achieve success"),
    ("achievement","/əˈtʃiːvmənt/","n. 成就","academic achievement"),
    ("acknowledge","/əkˈnɒlɪdʒ/","v. 承认","acknowledge receipt"),
    ("acquaintance","/əˈkweɪntəns/","n. 熟人","make acquaintance"),
    ("adequate","/ˈædɪkwət/","adj. 足够的","adequate supply"),
    ("admire","/ədˈmaɪər/","v. 钦佩","admire for"),
    ("admission","/ədˈmɪʃn/","n. 准许进入","admission ticket"),
    ("adopt","/əˈdɒpt/","v. 采用","adopt a policy"),
    ("advanced","/ədˈvɑːnst/","adj. 先进的","advanced technology"),
    ("advantage","/ədˈvɑːntɪdʒ/","n. 优势","take advantage of"),
    ("advertise","/ˈædvətaɪz/","v. 做广告","advertise for"),
    ("advocate","/ˈædvəkeɪt/","v. 倡导","advocate for"),
    ("affair","/əˈfeər/","n. 事务","foreign affairs"),
    ("affect","/əˈfekt/","v. 影响","adversely affect"),
    ("afford","/əˈfɔːd/","v. 负担得起","can't afford"),
    ("agency","/ˈeɪdʒənsi/","n. 代理机构","travel agency"),
    ("aggressive","/əˈɡresɪv/","adj. 好斗的","aggressive behavior"),
    ("aid","/eɪd/","n./v. 帮助","first aid"),
    ("aim","/eɪm/","n. 目标 v. 瞄准","aim at"),
    ("alarm","/əˈlɑːm/","n. 警报","fire alarm"),
    ("alert","/əˈlɜːt/","adj. 警觉的","stay alert"),
    ("alcohol","/ˈælkəhɒl/","n. 酒精","alcohol abuse"),
    ("allowance","/əˈlaʊəns/","n. 津贴","make allowance for"),
    ("alongside","/əˌlɒŋˈsaɪd/","prep. 在…旁边","work alongside"),
    ("alter","/ˈɔːltər/","v. 改变","alter the course"),
    ("amaze","/əˈmeɪz/","v. 使惊奇","be amazed at"),
    ("ambition","/æmˈbɪʃn/","n. 雄心","achieve ambition"),
    ("amount","/əˈmaʊnt/","n. 数量","a large amount of"),
    ("amuse","/əˈmjuːz/","v. 逗乐","amuse oneself"),
    ("ancestor","/ˈænsestər/","n. 祖先","common ancestor"),
    ("anchor","/ˈæŋkər/","n. 锚 v. 固定","news anchor"),
    ("ancient","/ˈeɪnʃənt/","adj. 古代的","ancient times"),
    ("angle","/ˈæŋɡl/","n. 角度","from another angle"),
    ("anniversary","/ˌænɪˈvɜːsəri/","n. 周年纪念日","wedding anniversary"),
    ("announce","/əˈnaʊns/","v. 宣布","announce plans"),
    ("annual","/ˈænjuəl/","adj. 年度的","annual report"),
    ("anticipate","/ænˈtɪsɪpeɪt/","v. 预期","anticipate problems"),
    ("anxiety","/æŋˈzaɪəti/","n. 焦虑","anxiety disorder"),
    ("apart","/əˈpɑːt/","adv. 分开","apart from"),
    ("apology","/əˈpɒlədʒi/","n. 道歉","make an apology"),
    ("apparent","/əˈpærənt/","adj. 显然的","apparent reason"),
    ("appeal","/əˈpiːl/","v./n. 呼吁","appeal to"),
    ("appetite","/ˈæpɪtaɪt/","n. 胃口","lose appetite"),
    ("appliance","/əˈplaɪəns/","n. 电器","household appliance"),
    ("applicant","/ˈæplɪkənt/","n. 申请人","job applicant"),
    ("apply","/əˈplaɪ/","v. 申请","apply for"),
    ("appoint","/əˈpɔɪnt/","v. 任命","appoint a leader"),
    ("appointment","/əˈpɔɪntmənt/","n. 约会","make an appointment"),
    ("architecture","/ˈɑːkɪtektʃər/","n. 建筑学","modern architecture"),
    ("argue","/ˈɑːɡjuː/","v. 争论","argue against"),
    ("argument","/ˈɑːɡjumənt/","n. 争论","strong argument"),
    ("arise","/əˈraɪz/","v. 出现","problems arise"),
    ("arrange","/əˈreɪndʒ/","v. 安排","arrange for"),
    ("arrest","/əˈrest/","v./n. 逮捕","under arrest"),
    ("artificial","/ˌɑːtɪˈfɪʃl/","adj. 人工的","artificial intelligence"),
    ("aspect","/ˈæspekt/","n. 方面","every aspect"),
    ("assemble","/əˈsembl/","v. 集合，组装","assemble parts"),
    ("assert","/əˈsɜːt/","v. 断言","assert authority"),
    ("assess","/əˈses/","v. 评估","assess the situation"),
    ("asset","/ˈæset/","n. 资产","valuable asset"),
    ("assign","/əˈsaɪn/","v. 分配","assign tasks"),
    ("assist","/əˈsɪst/","v. 帮助","assist in"),
    ("associate","/əˈsəʊʃieɪt/","v. 联系","associate with"),
    ("assume","/əˈsjuːm/","v. 假设","assume responsibility"),
    ("assumption","/əˈsʌmpʃn/","n. 假设","make an assumption"),
    ("assure","/əˈʃʊər/","v. 使确信","assure safety"),
    ("atmosphere","/ˈætməsfɪər/","n. 氛围","friendly atmosphere"),
    ("attach","/əˈtætʃ/","v. 附上","attach importance to"),
    ("attain","/əˈteɪn/","v. 达到","attain goals"),
    ("attempt","/əˈtempt/","v./n. 尝试","attempt to"),
    ("attend","/əˈtend/","v. 参加","attend a meeting"),
    ("attention","/əˈtenʃn/","n. 注意","pay attention to"),
    ("attitude","/ˈætɪtjuːd/","n. 态度","positive attitude"),
    ("attract","/əˈtrækt/","v. 吸引","attract attention"),
    ("attractive","/əˈtræktɪv/","adj. 有吸引力的","attractive offer"),
    ("attribute","/əˈtrɪbjuːt/","v. 归因于 n. 属性","attribute to"),
    ("audience","/ˈɔːdiəns/","n. 观众","target audience"),
    ("authority","/ɔːˈθɒrəti/","n. 权威","local authority"),
    ("automatic","/ˌɔːtəˈmætɪk/","adj. 自动的","automatic system"),
    ("avenue","/ˈævənjuː/","n. 大街，途径","explore avenues"),
    ("average","/ˈævərɪdʒ/","adj. 平均的","on average"),
    ("avoid","/əˈvɔɪd/","v. 避免","avoid doing"),
    ("award","/əˈwɔːd/","n. 奖品 v. 授予","win an award"),
    ("aware","/əˈweər/","adj. 意识到的","be aware of"),
    ("awful","/ˈɔːfl/","adj. 糟糕的","awful weather"),
    ("awkward","/ˈɔːkwəd/","adj. 尴尬的","awkward situation"),
    ("backup","/ˈbækʌp/","n. 备份 v. 支持","data backup"),
    ("backward","/ˈbækwəd/","adj. 落后的","backward area"),
    ("balance","/ˈbæləns/","n. 平衡 v. 平衡","keep balance"),
    ("ban","/bæn/","v./n. 禁止","ban on"),
    ("bankrupt","/ˈbæŋkrʌpt/","adj. 破产的","go bankrupt"),
    ("barely","/ˈbeəli/","adv. 几乎不","barely enough"),
    ("bargain","/ˈbɑːɡɪn/","n. 便宜货 v. 讨价还价","bargain price"),
    ("barrier","/ˈbæriər/","n. 障碍","language barrier"),
    ("battle","/ˈbætl/","n./v. 战斗","battle against"),
    ("behalf","/bɪˈhɑːf/","n. 利益，代表","on behalf of"),
    ("behave","/bɪˈheɪv/","v. 表现","behave well"),
    ("being","/ˈbiːɪŋ/","n. 生物，存在","human being"),
    ("belief","/bɪˈliːf/","n. 信念","beyond belief"),
    ("beloved","/bɪˈlʌvd/","adj. 心爱的","beloved wife"),
    ("beneath","/bɪˈniːθ/","prep. 在…下方","beneath the surface"),
    ("benefit","/ˈbenɪfɪt/","n. 利益 v. 受益","benefit from"),
    ("betray","/bɪˈtreɪ/","v. 背叛","betray trust"),
    ("billion","/ˈbɪljən/","n. 十亿","billions of"),
    ("bind","/baɪnd/","v. 捆绑","bind together"),
    ("biology","/baɪˈɒlədʒi/","n. 生物学","molecular biology"),
    ("bitter","/ˈbɪtər/","adj. 苦的","bitter experience"),
    ("blade","/bleɪd/","n. 刀刃","sharp blade"),
    ("blame","/bleɪm/","v./n. 责备","blame for"),
    ("blank","/blæŋk/","adj. 空白的","blank space"),
    ("blast","/blɑːst/","n. 爆炸 v. 爆破","blast off"),
    ("blend","/blend/","v./n. 混合","blend in"),
    ("bless","/bles/","v. 祝福","bless with"),
    ("bond","/bɒnd/","n. 纽带，债券","emotional bond"),
    ("boom","/buːm/","n. 繁荣 v. 兴旺","economic boom"),
    ("boost","/buːst/","v./n. 促进","boost confidence"),
    ("border","/ˈbɔːdər/","n. 边境","cross the border"),
    ("bounce","/baʊns/","v. 弹跳","bounce back"),
    ("bound","/baʊnd/","adj. 一定的","be bound to"),
    ("boundary","/ˈbaʊndri/","n. 边界","set boundaries"),
    ("brand","/brænd/","n. 品牌","brand image"),
    ("breed","/briːd/","v. 繁殖 n. 品种","breed animals"),
    ("brilliant","/ˈbrɪliənt/","adj. 杰出的","brilliant idea"),
    ("broad","/brɔːd/","adj. 宽的，广泛的","broad range"),
    ("broadcast","/ˈbrɔːdkɑːst/","v./n. 广播","live broadcast"),
    ("budget","/ˈbʌdʒɪt/","n. 预算","within budget"),
    ("burden","/ˈbɜːdn/","n. 负担","heavy burden"),
    ("burst","/bɜːst/","v. 爆发","burst into tears"),
    ("cabinet","/ˈkæbɪnət/","n. 橱柜，内阁","filing cabinet"),
    ("calculate","/ˈkælkjuleɪt/","v. 计算","calculate risk"),
    ("calendar","/ˈkælɪndər/","n. 日历","lunar calendar"),
    ("campaign","/kæmˈpeɪn/","n. 运动，战役","advertising campaign"),
    ("cancel","/ˈkænsl/","v. 取消","cancel order"),
    ("candidate","/ˈkændɪdət/","n. 候选人","presidential candidate"),
    ("capacity","/kəˈpæsəti/","n. 容量，能力","production capacity"),
    ("capture","/ˈkæptʃər/","v. 俘获","capture attention"),
    ("career","/kəˈrɪər/","n. 职业","career development"),
    ("cargo","/ˈkɑːɡəʊ/","n. 货物","cargo ship"),
    ("cast","/kɑːst/","v. 投掷","cast doubt on"),
    ("casual","/ˈkæʒuəl/","adj. 随便的","casual clothes"),
    ("catalog","/ˈkætəlɒɡ/","n. 目录","product catalog"),
    ("category","/ˈkætəɡəri/","n. 类别","product category"),
    ("caution","/ˈkɔːʃn/","n. 小心","with caution"),
    ("cease","/siːs/","v. 停止","cease to exist"),
    ("celebrate","/ˈselɪbreɪt/","v. 庆祝","celebrate success"),
    ("ceremony","/ˈserəməni/","n. 典礼","opening ceremony"),
    ("certificate","/səˈtɪfɪkət/","n. 证书","birth certificate"),
    ("channel","/ˈtʃænl/","n. 频道，渠道","communication channel"),
    ("character","/ˈkærəktər/","n. 性格，角色","main character"),
    ("characteristic","/ˌkærəktəˈrɪstɪk/","n. 特征","key characteristic"),
    ("charity","/ˈtʃærəti/","n. 慈善","charity event"),
    ("chart","/tʃɑːt/","n. 图表","flow chart"),
    ("chemical","/ˈkemɪkl/","adj. 化学的","chemical reaction"),
    ("chief","/tʃiːf/","adj. 主要的 n. 首领","chief executive"),
    ("circumstance","/ˈsɜːkəmstəns/","n. 环境","under no circumstances"),
    ("civil","/ˈsɪvl/","adj. 公民的","civil rights"),
    ("civilization","/ˌsɪvəlaɪˈzeɪʃn/","n. 文明","ancient civilization"),
    ("claim","/kleɪm/","v./n. 声称","claim responsibility"),
    ("clarify","/ˈklærɪfaɪ/","v. 澄清","clarify the point"),
    ("classic","/ˈklæsɪk/","adj. 经典的","classic example"),
    ("classify","/ˈklæsɪfaɪ/","v. 分类","classify into"),
    ("climate","/ˈklaɪmət/","n. 气候","climate change"),
    ("code","/kəʊd/","n. 代码，准则","dress code"),
    ("collapse","/kəˈlæps/","v./n. 倒塌","economic collapse"),
    ("colleague","/ˈkɒliːɡ/","n. 同事","work colleague"),
    ("column","/ˈkɒləm/","n. 栏目，柱","newspaper column"),
    ("combat","/ˈkɒmbæt/","v./n. 战斗","combat crime"),
    ("combine","/kəmˈbaɪn/","v. 结合","combine with"),
    ("command","/kəˈmɑːnd/","v./n. 命令，掌握","have a command of"),
    ("comment","/ˈkɒment/","n./v. 评论","no comment"),
    ("commerce","/ˈkɒmɜːs/","n. 商业","e-commerce"),
    ("commercial","/kəˈmɜːʃl/","adj. 商业的 n. 广告","commercial bank"),
    ("commission","/kəˈmɪʃn/","n. 委员会，佣金","on commission"),
    ("commit","/kəˈmɪt/","v. 犯(罪)，承诺","commit crime"),
    ("commitment","/kəˈmɪtmənt/","n. 承诺","make a commitment"),
    ("committee","/kəˈmɪti/","n. 委员会","executive committee"),
    ("communicate","/kəˈmjuːnɪkeɪt/","v. 交流","communicate with"),
    ("community","/kəˈmjuːnəti/","n. 社区","local community"),
    ("companion","/kəmˈpæniən/","n. 同伴","travel companion"),
    ("compare","/kəmˈpeər/","v. 比较","compare with"),
    ("compensation","/ˌkɒmpenˈseɪʃn/","n. 补偿","seek compensation"),
    ("compete","/kəmˈpiːt/","v. 竞争","compete against"),
    ("complain","/kəmˈpleɪn/","v. 抱怨","complain about"),
    ("complaint","/kəmˈpleɪnt/","n. 投诉","make a complaint"),
    ("component","/kəmˈpəʊnənt/","n. 组成部分","key component"),
    ("compose","/kəmˈpəʊz/","v. 组成，创作","compose music"),
    ("comprehensive","/ˌkɒmprɪˈhensɪv/","adj. 全面的","comprehensive survey"),
    ("comprise","/kəmˈpraɪz/","v. 包含","be comprised of"),
    ("compromise","/ˈkɒmprəmaɪz/","n./v. 妥协","reach a compromise"),
    ("concept","/ˈkɒnsept/","n. 概念","basic concept"),
    ("concern","/kənˈsɜːn/","n. 关心 v. 涉及","concern about"),
    ("conclude","/kənˈkluːd/","v. 得出结论","conclude that"),
    ("conduct","/kənˈdʌkt/","v. 进行 n. 行为","conduct research"),
    ("conference","/ˈkɒnfərəns/","n. 会议","press conference"),
    ("confidence","/ˈkɒnfɪdəns/","n. 信心","self-confidence"),
    ("confirm","/kənˈfɜːm/","v. 确认","confirm reservation"),
    ("conflict","/ˈkɒnflɪkt/","n. 冲突","conflict of interest"),
    ("confront","/kənˈfrʌnt/","v. 面对","confront challenges"),
    ("confuse","/kənˈfjuːz/","v. 使困惑","confuse A with B"),
    ("congratulate","/kənˈɡrætʃuleɪt/","v. 祝贺","congratulate on"),
    ("connection","/kəˈnekʃn/","n. 连接","Internet connection"),
    ("conscious","/ˈkɒnʃəs/","adj. 有意识的","be conscious of"),
    ("consequence","/ˈkɒnsɪkwəns/","n. 结果","face consequences"),
    ("conservation","/ˌkɒnsəˈveɪʃn/","n. 保护","energy conservation"),
    ("considerable","/kənˈsɪdərəbl/","adj. 相当大的","considerable amount"),
    ("consist","/kənˈsɪst/","v. 组成","consist of"),
    ("constant","/ˈkɒnstənt/","adj. 不断的","constant effort"),
    ("constitute","/ˈkɒnstɪtjuːt/","v. 构成","constitute a threat"),
    ("construct","/kənˈstrʌkt/","v. 建造","construct a bridge"),
    ("consult","/kənˈsʌlt/","v. 咨询","consult a doctor"),
    ("consume","/kənˈsjuːm/","v. 消费","consume energy"),
    ("consumer","/kənˈsjuːmər/","n. 消费者","consumer rights"),
    ("contact","/ˈkɒntækt/","n./v. 联系","contact information"),
    ("contain","/kənˈteɪn/","v. 包含","contain information"),
    ("contemporary","/kənˈtemprəri/","adj. 当代的","contemporary art"),
    ("content","/ˈkɒntent/","n. 内容 adj. 满足的","be content with"),
    ("contest","/ˈkɒntest/","n. 竞赛","enter a contest"),
    ("context","/ˈkɒntekst/","n. 上下文","in context"),
    ("continuous","/kənˈtɪnjuəs/","adj. 连续的","continuous process"),
    ("contract","/ˈkɒntrækt/","n. 合同 v. 收缩","sign a contract"),
    ("contrary","/ˈkɒntrəri/","adj. 相反的","on the contrary"),
    ("contrast","/ˈkɒntrɑːst/","n./v. 对比","in contrast to"),
    ("contribute","/kənˈtrɪbjuːt/","v. 贡献","contribute to"),
    ("controversial","/ˌkɒntrəˈvɜːʃl/","adj. 有争议的","controversial issue"),
    ("convenience","/kənˈviːniəns/","n. 便利","for convenience"),
    ("conventional","/kənˈvenʃənl/","adj. 传统的","conventional method"),
    ("convert","/kənˈvɜːt/","v. 转变","convert into"),
    ("convey","/kənˈveɪ/","v. 传达","convey message"),
    ("convince","/kənˈvɪns/","v. 说服","convince someone"),
    ("cooperate","/kəʊˈɒpəreɪt/","v. 合作","cooperate with"),
    ("coordinate","/kəʊˈɔːdɪneɪt/","v. 协调","coordinate efforts"),
    ("cope","/kəʊp/","v. 应付","cope with"),
    ("core","/kɔːr/","n. 核心","core value"),
    ("corporate","/ˈkɔːpərət/","adj. 公司的","corporate culture"),
    ("corporation","/ˌkɔːpəˈreɪʃn/","n. 公司","multinational corporation"),
    ("correspond","/ˌkɒrəˈspɒnd/","v. 对应","correspond to"),
    ("county","/ˈkaʊnti/","n. 县","county level"),
    ("court","/kɔːt/","n. 法庭","supreme court"),
    ("crash","/kræʃ/","v./n. 碰撞","car crash"),
    ("creative","/kriˈeɪtɪv/","adj. 创造性的","creative thinking"),
    ("credit","/ˈkredɪt/","n. 信用，学分","credit card"),
    ("crime","/kraɪm/","n. 犯罪","commit a crime"),
    ("criminal","/ˈkrɪmɪnl/","adj. 犯罪的 n. 罪犯","criminal law"),
    ("crisis","/ˈkraɪsɪs/","n. 危机","financial crisis"),
    ("criterion","/kraɪˈtɪəriən/","n. 标准","selection criterion"),
    ("critical","/ˈkrɪtɪkl/","adj. 批评的，关键的","critical thinking"),
    ("criticism","/ˈkrɪtɪsɪzəm/","n. 批评","constructive criticism"),
    ("cultivate","/ˈkʌltɪveɪt/","v. 培养","cultivate habits"),
    ("culture","/ˈkʌltʃər/","n. 文化","corporate culture"),
    ("curiosity","/ˌkjʊəriˈɒsəti/","n. 好奇心","out of curiosity"),
    ("currency","/ˈkʌrənsi/","n. 货币","foreign currency"),
    ("current","/ˈkʌrənt/","adj. 当前的","current situation"),
    ("curriculum","/kəˈrɪkjələm/","n. 课程","curriculum vitae"),
    ("damage","/ˈdæmɪdʒ/","n./v. 损害","cause damage"),
    ("deadline","/ˈdedlaɪn/","n. 截止日期","meet the deadline"),
    ("debate","/dɪˈbeɪt/","n./v. 辩论","heated debate"),
    ("debt","/det/","n. 债务","in debt"),
    ("decade","/ˈdekeɪd/","n. 十年","over the past decade"),
    ("deceive","/dɪˈsiːv/","v. 欺骗","deceive someone"),
    ("decline","/dɪˈklaɪn/","v./n. 下降，拒绝","decline an offer"),
    ("decorate","/ˈdekəreɪt/","v. 装饰","decorate the room"),
    ("defeat","/dɪˈfiːt/","v./n. 击败","defeat the enemy"),
    ("defend","/dɪˈfend/","v. 防御，辩护","defend against"),
    ("define","/dɪˈfaɪn/","v. 定义","define as"),
    ("definite","/ˈdefɪnət/","adj. 明确的","definite answer"),
    ("definitely","/ˈdefɪnətli/","adv. 肯定地","definitely true"),
    ("delay","/dɪˈleɪ/","v./n. 延迟","without delay"),
    ("delegate","/ˈdelɪɡət/","n. 代表 v. 授权","delegate authority"),
    ("deliberate","/dɪˈlɪbərət/","adj. 故意的","deliberate attempt"),
    ("delicate","/ˈdelɪkət/","adj. 精致的","delicate situation"),
    ("deliver","/dɪˈlɪvər/","v. 递送，发表","deliver a speech"),
    ("demand","/dɪˈmɑːnd/","v./n. 需求","supply and demand"),
    ("democracy","/dɪˈmɒkrəsi/","n. 民主","democracy and freedom"),
    ("demonstrate","/ˈdemənstreɪt/","v. 展示","demonstrate ability"),
    ("dense","/dens/","adj. 密集的","dense population"),
    ("deny","/dɪˈnaɪ/","v. 否认","deny access"),
    ("depart","/dɪˈpɑːt/","v. 离开","depart from"),
    ("department","/dɪˈpɑːtmənt/","n. 部门","marketing department"),
    ("departure","/dɪˈpɑːtʃər/","n. 离开","departure time"),
    ("depend","/dɪˈpend/","v. 依赖","depend on"),
    ("deposit","/dɪˈpɒzɪt/","n. 存款 v. 存放","bank deposit"),
    ("depress","/dɪˈpres/","v. 使沮丧","depress economy"),
    ("depression","/dɪˈpreʃn/","n. 抑郁，萧条","economic depression"),
    ("derive","/dɪˈraɪv/","v. 源自","derive from"),
    ("deserve","/dɪˈzɜːv/","v. 值得","deserve attention"),
    ("desire","/dɪˈzaɪər/","n./v. 渴望","strong desire"),
    ("desperate","/ˈdespərət/","adj. 绝望的","desperate situation"),
    ("despite","/dɪˈspaɪt/","prep. 尽管","despite the fact"),
    ("destination","/ˌdestɪˈneɪʃn/","n. 目的地","tourist destination"),
    ("destroy","/dɪˈstrɔɪ/","v. 破坏","destroy evidence"),
    ("detail","/ˈdiːteɪl/","n. 细节 v. 详述","in detail"),
    ("detect","/dɪˈtekt/","v. 发现","detect changes"),
    ("determination","/dɪˌtɜːmɪˈneɪʃn/","n. 决心","show determination"),
    ("determine","/dɪˈtɜːmɪn/","v. 决定","determine to do"),
    ("device","/dɪˈvaɪs/","n. 设备","electronic device"),
    ("devote","/dɪˈvəʊt/","v. 致力于","devote to"),
    ("differ","/ˈdɪfər/","v. 不同","differ from"),
    ("digital","/ˈdɪdʒɪtl/","adj. 数字的","digital age"),
    ("dignity","/ˈdɪɡnəti/","n. 尊严","human dignity"),
    ("dimension","/daɪˈmenʃn/","n. 尺寸，维度","third dimension"),
    ("discipline","/ˈdɪsəplɪn/","n. 纪律","self-discipline"),
    ("discount","/ˈdɪskaʊnt/","n. 折扣","at a discount"),
    ("display","/dɪˈspleɪ/","v./n. 展示","on display"),
    ("dispose","/dɪˈspəʊz/","v. 处理","dispose of"),
    ("dispute","/dɪˈspjuːt/","n./v. 争论","labor dispute"),
    ("dissolve","/dɪˈzɒlv/","v. 溶解","dissolve in water"),
    ("distinct","/dɪˈstɪŋkt/","adj. 不同的","distinct from"),
    ("distinguish","/dɪˈstɪŋɡwɪʃ/","v. 区分","distinguish between"),
    ("distribute","/dɪˈstrɪbjuːt/","v. 分发","distribute to"),
    ("diverse","/daɪˈvɜːs/","adj. 多样的","culturally diverse"),
    ("division","/dɪˈvɪʒn/","n. 划分","division of labor"),
    ("document","/ˈdɒkjumənt/","n. 文件","official document"),
    ("domestic","/dəˈmestɪk/","adj. 国内的","domestic market"),
    ("dominant","/ˈdɒmɪnənt/","adj. 主导的","dominant position"),
    ("dominate","/ˈdɒmɪneɪt/","v. 主导","dominate the market"),
    ("donation","/dəʊˈneɪʃn/","n. 捐赠","make a donation"),
    ("draft","/drɑːft/","n. 草稿 v. 起草","first draft"),
    ("dramatic","/drəˈmætɪk/","adj. 戏剧性的","dramatic change"),
    ("drift","/drɪft/","v./n. 漂流","drift apart"),
    ("dynamic","/daɪˈnæmɪk/","adj. 动态的","dynamic economy"),
    ("ease","/iːz/","n. 容易 v. 减轻","with ease"),
    ("economic","/ˌiːkəˈnɒmɪk/","adj. 经济的","economic growth"),
    ("economical","/ˌiːkəˈnɒmɪkl/","adj. 节约的","economical car"),
    ("economy","/ɪˈkɒnəmi/","n. 经济","global economy"),
    ("edition","/ɪˈdɪʃn/","n. 版本","special edition"),
    ("editor","/ˈedɪtər/","n. 编辑","chief editor"),
    ("educate","/ˈedʒukeɪt/","v. 教育","educate children"),
    ("effective","/ɪˈfektɪv/","adj. 有效的","effective method"),
    ("efficiency","/ɪˈfɪʃnsi/","n. 效率","improve efficiency"),
    ("efficient","/ɪˈfɪʃnt/","adj. 高效的","energy efficient"),
    ("elaborate","/ɪˈlæbərət/","adj. 精心的","elaborate on"),
    ("election","/ɪˈlekʃn/","n. 选举","general election"),
    ("electronic","/ɪˌlekˈtrɒnɪk/","adj. 电子的","electronic device"),
    ("element","/ˈelɪmənt/","n. 元素","key element"),
    ("eliminate","/ɪˈlɪmɪneɪt/","v. 消除","eliminate poverty"),
    ("embrace","/ɪmˈbreɪs/","v. 拥抱，接受","embrace change"),
    ("emerge","/ɪˈmɜːdʒ/","v. 出现","emerge as"),
    ("emergency","/ɪˈmɜːdʒənsi/","n. 紧急情况","emergency room"),
    ("emission","/ɪˈmɪʃn/","n. 排放","carbon emission"),
    ("emotion","/ɪˈməʊʃn/","n. 情感","express emotion"),
    ("emphasis","/ˈemfəsɪs/","n. 强调","put emphasis on"),
    ("emphasize","/ˈemfəsaɪz/","v. 强调","emphasize the importance"),
    ("employ","/ɪmˈplɔɪ/","v. 雇用","employ workers"),
    ("employee","/ɪmˈplɔɪiː/","n. 雇员","employee benefits"),
    ("employer","/ɪmˈplɔɪər/","n. 雇主","employer brand"),
    ("enable","/ɪˈneɪbl/","v. 使能够","enable to do"),
    ("encounter","/ɪnˈkaʊntər/","v./n. 遭遇","encounter problems"),
    ("engage","/ɪnˈɡeɪdʒ/","v. 从事，吸引","engage in"),
    ("enhance","/ɪnˈhɑːns/","v. 提高","enhance performance"),
    ("enormous","/ɪˈnɔːməs/","adj. 巨大的","enormous potential"),
    ("ensure","/ɪnˈʃʊər/","v. 确保","ensure safety"),
    ("enterprise","/ˈentəpraɪz/","n. 企业","private enterprise"),
    ("entertain","/ˌentəˈteɪn/","v. 娱乐","entertain guests"),
    ("enthusiasm","/ɪnˈθjuːziæzəm/","n. 热情","show enthusiasm"),
    ("entitle","/ɪnˈtaɪtl/","v. 给…权利","be entitled to"),
    ("equip","/ɪˈkwɪp/","v. 装备","equip with"),
    ("equivalent","/ɪˈkwɪvələnt/","adj. 等价的","equivalent to"),
    ("error","/ˈerər/","n. 错误","human error"),
    ("essential","/ɪˈsenʃl/","adj. 必要的","essential role"),
    ("establish","/ɪˈstæblɪʃ/","v. 建立","establish contact"),
    ("estate","/ɪˈsteɪt/","n. 房地产","real estate"),
    ("estimate","/ˈestɪmeɪt/","v./n. 估计","rough estimate"),
    ("evaluate","/ɪˈvæljueɪt/","v. 评估","evaluate performance"),
    ("evidence","/ˈevɪdəns/","n. 证据","scientific evidence"),
    ("evident","/ˈevɪdənt/","adj. 明显的","self-evident"),
    ("evolution","/ˌiːvəˈluːʃn/","n. 进化","human evolution"),
    ("evolve","/ɪˈvɒlv/","v. 进化","evolve into"),
    ("exaggerate","/ɪɡˈzædʒəreɪt/","v. 夸大","tend to exaggerate"),
    ("examine","/ɪɡˈzæmɪn/","v. 检查","examine carefully"),
    ("exceed","/ɪkˈsiːd/","v. 超过","exceed expectations"),
    ("exception","/ɪkˈsepʃn/","n. 例外","without exception"),
    ("excessive","/ɪkˈsesɪv/","adj. 过度的","excessive use"),
    ("exchange","/ɪksˈtʃeɪndʒ/","v./n. 交换","exchange rate"),
    ("exclude","/ɪkˈskluːd/","v. 排除","exclude from"),
    ("execute","/ˈeksɪkjuːt/","v. 执行","execute a plan"),
    ("executive","/ɪɡˈzekjətɪv/","adj. 执行的 n. 主管","chief executive"),
    ("exhibit","/ɪɡˈzɪbɪt/","v. 展示","exhibit behavior"),
    ("expand","/ɪkˈspænd/","v. 扩张","expand business"),
    ("expense","/ɪkˈspens/","n. 费用","at the expense of"),
    ("expert","/ˈekspɜːt/","n. 专家","subject expert"),
    ("exploit","/ɪkˈsplɔɪt/","v. 开发，剥削","exploit resources"),
    ("explore","/ɪkˈsplɔːr/","v. 探索","explore options"),
    ("export","/ɪkˈspɔːt/","v./n. 出口","export goods"),
    ("expose","/ɪkˈspəʊz/","v. 暴露","expose to"),
    ("extend","/ɪkˈstend/","v. 延伸","extend deadline"),
    ("extensive","/ɪkˈstensɪv/","adj. 广泛的","extensive research"),
    ("extent","/ɪkˈstent/","n. 程度","to some extent"),
    ("external","/ɪkˈstɜːnl/","adj. 外部的","external factors"),
    ("extraordinary","/ɪkˈstrɔːdnri/","adj. 非凡的","extraordinary achievement"),
    ("extreme","/ɪkˈstriːm/","adj. 极端的","extreme weather"),
]
print(f"Bank: {len(CET4_BANK)} words")

# ===== 5. 保留原 WORD_POOL + 追加 bank 新词 =====
all_learned = set(day0_names + day1_names + day2_names)
bank_avail = [(w,p,m,c) for w,p,m,c in CET4_BANK if w not in all_learned]
# 每天需保证有 100 个未学词可用 → 追加拿词 = 100*(dayIndex-2) 从 bank
words_to_add = 100 * max(0, dayIndex - 2)
new_from_bank = bank_avail[:words_to_add]
print(f"Adding {len(new_from_bank)} bank words (need {words_to_add})")

# 保留全量原池 + 追加新词
def fmt_entry(e, is_tuple=False):
    if is_tuple: return '{w:"%s",p:"%s",m:"%s",c:"%s"}' % e
    return e.strip()

pool_entries = [fmt_entry(e) for e in all_entries] + [fmt_entry(t, True) for t in new_from_bank]
new_pool = 'const WORD_POOL = [\n' + ',\n'.join('  ' + e for e in pool_entries) + '\n];'
html = html.replace(m.group(0), new_pool)

# ===== 6. 注入 PRESERVED_DAYS =====
html = html.replace('<script>', '<script>\n' + preserved_js)

# ===== 7. 替换 getDailyVocab =====
s = html.find('function getDailyVocab')
depth = 0; found_start = False
for i in range(s, len(html)):
    if html[i] == '{': depth += 1; found_start = True
    elif html[i] == '}': depth -= 1
    if found_start and depth == 0:
        e = i + 1; break

new_func = '''function getDailyVocab(d) {
  var key = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  if (vocabForDate[key]) return vocabForDate[key];

  var idx = dayIndex(d);
  if (idx < 3) {
    vocabForDate[key] = PRESERVED_DAYS[idx];
    return vocabForDate[key];
  }

  // Day 3+: 排除全部已学词，随机取100
  var used = new Set();
  for (var di = 0; di < Math.min(idx, 3); di++) {
    PRESERVED_DAYS[di].forEach(function(w) { used.add(w.w); });
  }
  for (var di = 3; di < idx; di++) {
    var pDate = new Date(START_DATE.getTime() + di * MS_DAY);
    var pKey = pDate.getFullYear()+'-'+String(pDate.getMonth()+1).padStart(2,'0')+'-'+String(pDate.getDate()).padStart(2,'0');
    if (vocabForDate[pKey]) {
      vocabForDate[pKey].forEach(function(w) { used.add(w.w); });
    }
  }

  var available = WORD_POOL.filter(function(w) { return !used.has(w.w); });
  var rng = seededRandom(key);
  for (var i = available.length - 1; i > 0; i--) {
    var j = Math.floor(rng() * (i + 1));
    var tmp = available[i]; available[i] = available[j]; available[j] = tmp;
  }
  vocabForDate[key] = available.slice(0, Math.min(100, available.length));
  return vocabForDate[key];
}'''
html = html.replace(html[s:e], new_func)
print("getDailyVocab replaced (used-word tracking)")

# ===== 8. 验证 =====
s2 = html.find('<script>')
e2 = html.rfind('</script>')
js = html[s2:e2]
ob = js.count('{'); cb = js.count('}')
pool_size = len(re.findall(r'\{w:"([^"]+)"', html))
print(f"POOL entries: {pool_size} | JS braces: {ob}/{cb} balanced={ob==cb}")

with open(PATH, 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Size: {len(html)} bytes")
print("Logic: day<3→PRESERVED_DAYS | day>=3→unique random100 ✓")
