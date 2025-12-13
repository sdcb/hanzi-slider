/* global window */
(function () {
	"use strict";

	/**
	 * 结构说明：
	 * - 左右结构：偏旁在左（固定），部件在右（可左右抽拉）
	 * - 上下结构：偏旁在上（固定），部件在下（可上下抽拉）
	 */
	const SETS_LR = [
		{
			name: "口字旁（口）",
			radical: "口",
			pyRadical: "kǒu",
			items: [
				{ part: "马", pyPart: "mǎ", char: "吗", pyChar: "ma" },
				{ part: "巴", pyPart: "bā", char: "吧", pyChar: "ba" },
				{ part: "牙", pyPart: "yá", char: "呀", pyChar: "ya" },
				{ part: "斤", pyPart: "jīn", char: "听", pyChar: "tīng" },
				{ part: "未", pyPart: "wèi", char: "味", pyChar: "wèi" },
				{ part: "乞", pyPart: "qǐ", char: "吃", pyChar: "chī" },
				{ part: "尼", pyPart: "ní", char: "呢", pyChar: "ne" },
				{ part: "曷", pyPart: "hé", char: "喝", pyChar: "hē" },
				{ part: "土", pyPart: "tǔ", char: "吐", pyChar: "tǔ" },
				{ part: "古", pyPart: "gǔ", char: "咕", pyChar: "gū" },
				{ part: "合", pyPart: "hé", char: "哈", pyChar: "hā" },
				{ part: "欠", pyPart: "qiàn", char: "吹", pyChar: "chuī" },
				{ part: "昌", pyPart: "chāng", char: "唱", pyChar: "chàng" },
				{ part: "咸", pyPart: "xián", char: "喊", pyChar: "hǎn" },
				{ part: "丩", pyPart: "jiū", char: "叫", pyChar: "jiào" },
				{ part: "十", pyPart: "shí", char: "叶", pyChar: "yè" },
				{ part: "及", pyPart: "jí", char: "吸", pyChar: "xī" }
			]
		},
		{
			name: "三点水（氵）",
			radical: "氵",
			pyRadical: "shuǐ",
			items: [
				{ part: "工", pyPart: "gōng", char: "江", pyChar: "jiāng" },
				{ part: "可", pyPart: "kě", char: "河", pyChar: "hé" },
				{ part: "青", pyPart: "qīng", char: "清", pyChar: "qīng" },
				{ part: "羊", pyPart: "yáng", char: "洋", pyChar: "yáng" },
				{ part: "去", pyPart: "qù", char: "法", pyChar: "fǎ" },
				{ part: "台", pyPart: "tái", char: "治", pyChar: "zhì" },
				{ part: "皮", pyPart: "pí", char: "波", pyChar: "bō" },
				{ part: "包", pyPart: "bāo", char: "泡", pyChar: "pào" },
				{ part: "肖", pyPart: "xiào", char: "消", pyChar: "xiāo" },
				{ part: "酉", pyPart: "yǒu", char: "酒", pyChar: "jiǔ" },
				{ part: "胡", pyPart: "hú", char: "湖", pyChar: "hú" },
				{ part: "曷", pyPart: "hé", char: "渴", pyChar: "kě" },
				{ part: "每", pyPart: "měi", char: "海", pyChar: "hǎi" },
				{ part: "先", pyPart: "xiān", char: "洗", pyChar: "xǐ" },
				{ part: "舌", pyPart: "shé", char: "活", pyChar: "huó" },
				{ part: "气", pyPart: "qì", char: "汽", pyChar: "qì" },
				{ part: "干", pyPart: "gān", char: "汗", pyChar: "hàn" },
				{ part: "也", pyPart: "yě", char: "池", pyChar: "chí" }
			]
		},
		{
			name: "提手旁（扌）",
			radical: "扌",
			pyRadical: "shǒu",
			items: [
				{ part: "丁", pyPart: "dīng", char: "打", pyChar: "dǎ" },
				{ part: "巴", pyPart: "bā", char: "把", pyChar: "bǎ" },
				{ part: "包", pyPart: "bāo", char: "抱", pyChar: "bào" },
				{ part: "白", pyPart: "bái", char: "拍", pyChar: "pāi" },
				{ part: "立", pyPart: "lì", char: "拉", pyChar: "lā" },
				{ part: "戈", pyPart: "gē", char: "找", pyChar: "zhǎo" },
				{ part: "彐", pyPart: "jì", char: "扫", pyChar: "sǎo" },
				{ part: "口", pyPart: "kǒu", char: "扣", pyChar: "kòu" },
				{ part: "斤", pyPart: "jīn", char: "折", pyChar: "zhé" },
				{ part: "夫", pyPart: "fū", char: "扶", pyChar: "fú" },
				{ part: "支", pyPart: "zhī", char: "技", pyChar: "jì" },
				{ part: "由", pyPart: "yóu", char: "抽", pyChar: "chōu" },
				{ part: "台", pyPart: "tái", char: "抬", pyChar: "tái" },
				{ part: "安", pyPart: "ān", char: "按", pyChar: "àn" },
				{ part: "足", pyPart: "zú", char: "捉", pyChar: "zhuō" },
				{ part: "是", pyPart: "shì", char: "提", pyChar: "tí" },
				{ part: "隹", pyPart: "zhuī", char: "推", pyChar: "tuī" }
			]
		},
		{
			name: "木字旁（木）",
			radical: "木",
			pyRadical: "mù",
			items: [
				{ part: "子", pyPart: "zǐ", char: "李", pyChar: "lǐ" },
				{ part: "寸", pyPart: "cùn", char: "村", pyChar: "cūn" },
				{ part: "不", pyPart: "bù", char: "杯", pyChar: "bēi" },
				{ part: "交", pyPart: "jiāo", char: "校", pyChar: "xiào" },
				{ part: "兆", pyPart: "zhào", char: "桃", pyChar: "táo" },
				{ part: "卓", pyPart: "zhuō", char: "桌", pyChar: "zhuō" },
				{ part: "乔", pyPart: "qiáo", char: "桥", pyChar: "qiáo" },
				{ part: "木", pyPart: "mù", char: "林", pyChar: "lín" },
				{ part: "林", pyPart: "lín", char: "森", pyChar: "sēn" },
				{ part: "对", pyPart: "duì", char: "树", pyChar: "shù" },
				{ part: "艮", pyPart: "gèn", char: "根", pyChar: "gēn" },
				{ part: "反", pyPart: "fǎn", char: "板", pyChar: "bǎn" },
				{ part: "及", pyPart: "jí", char: "极", pyChar: "jí" },
				{ part: "佥", pyPart: "qiān", char: "检", pyChar: "jiǎn" },
				{ part: "目", pyPart: "mù", char: "相", pyChar: "xiāng" },
				{ part: "奉", pyPart: "fèng", char: "棒", pyChar: "bàng" },
				{ part: "羊", pyPart: "yáng", char: "样", pyChar: "yàng" },
				{ part: "票", pyPart: "piào", char: "标", pyChar: "biāo" }
			]
		},
		{
			name: "竖心旁（忄）",
			radical: "忄",
			pyRadical: "xīn",
			items: [
				{ part: "白", pyPart: "bái", char: "怕", pyChar: "pà" },
				{ part: "亡", pyPart: "wáng", char: "忙", pyChar: "máng" },
				{ part: "夬", pyPart: "guài", char: "快", pyChar: "kuài" },
				{ part: "圣", pyPart: "shèng", char: "怪", pyChar: "guài" },
				{ part: "艮", pyPart: "gèn", char: "恨", pyChar: "hèn" },
				{ part: "昔", pyPart: "xī", char: "惜", pyChar: "xī" },
				{ part: "青", pyPart: "qīng", char: "情", pyChar: "qíng" },
				{ part: "曼", pyPart: "màn", char: "慢", pyChar: "màn" },
				{ part: "合", pyPart: "hé", char: "恰", pyChar: "qià" },
				{ part: "每", pyPart: "měi", char: "悔", pyChar: "huǐ" },
				{ part: "乙", pyPart: "yǐ", char: "忆", pyChar: "yì" },
				{ part: "不", pyPart: "bù", char: "怀", pyChar: "huái" },
				{ part: "尤", pyPart: "yóu", char: "忧", pyChar: "yōu" },
				{ part: "兑", pyPart: "duì", char: "悦", pyChar: "yuè" },
				{ part: "京", pyPart: "jīng", char: "惊", pyChar: "jīng" }
			]
		},
		{
			name: "女字旁（女）",
			radical: "女",
			pyRadical: "nǚ",
			items: [
				{ part: "子", pyPart: "zǐ", char: "好", pyChar: "hǎo" },
				{ part: "马", pyPart: "mǎ", char: "妈", pyChar: "mā" },
				{ part: "且", pyPart: "qiě", char: "姐", pyChar: "jiě" },
				{ part: "未", pyPart: "wèi", char: "妹", pyChar: "mèi" },
				{ part: "生", pyPart: "shēng", char: "姓", pyChar: "xìng" },
				{ part: "乃", pyPart: "nǎi", char: "奶", pyChar: "nǎi" },
				{ part: "少", pyPart: "shǎo", char: "妙", pyChar: "miào" },
				{ part: "口", pyPart: "kǒu", char: "如", pyChar: "rú" },
				{ part: "己", pyPart: "jǐ", char: "妃", pyChar: "fēi" },
				{ part: "方", pyPart: "fāng", char: "妨", pyChar: "fáng" },
				{ part: "台", pyPart: "tái", char: "始", pyChar: "shǐ" },
				{ part: "古", pyPart: "gǔ", char: "姑", pyChar: "gū" }
			]
		},
		{
			name: "单人旁（亻）",
			radical: "亻",
			pyRadical: "rén",
			items: [
				{ part: "言", pyPart: "yán", char: "信", pyChar: "xìn" },
				{ part: "专", pyPart: "zhuān", char: "传", pyChar: "chuán" },
				{ part: "尔", pyPart: "ěr", char: "你", pyChar: "nǐ" },
				{ part: "也", pyPart: "yě", char: "他", pyChar: "tā" },
				{ part: "门", pyPart: "mén", char: "们", pyChar: "men" },
				{ part: "木", pyPart: "mù", char: "休", pyChar: "xiū" },
				{ part: "子", pyPart: "zǐ", char: "仔", pyChar: "zǎi" },
				{ part: "乍", pyPart: "zhà", char: "作", pyChar: "zuò" },
				{ part: "十", pyPart: "shí", char: "什", pyChar: "shén" },
				{ part: "二", pyPart: "èr", char: "仁", pyChar: "rén" },
				{ part: "弋", pyPart: "yì", char: "代", pyChar: "dài" },
				{ part: "七", pyPart: "qī", char: "化", pyChar: "huà" },
				{ part: "立", pyPart: "lì", char: "位", pyChar: "wèi" },
				{ part: "主", pyPart: "zhǔ", char: "住", pyChar: "zhù" }
			]
		},
		{
			name: "言字旁（讠）",
			radical: "讠",
			pyRadical: "yán",
			items: [
				{ part: "吾", pyPart: "wú", char: "语", pyChar: "yǔ" },
				{ part: "兑", pyPart: "duì", char: "说", pyChar: "shuō" },
				{ part: "舌", pyPart: "shé", char: "话", pyChar: "huà" },
				{ part: "卖", pyPart: "mài", char: "读", pyChar: "dú" },
				{ part: "人", pyPart: "rén", char: "认", pyChar: "rèn" },
				{ part: "只", pyPart: "zhǐ", char: "识", pyChar: "shí" },
				{ part: "寸", pyPart: "cùn", char: "讨", pyChar: "tǎo" },
				{ part: "仑", pyPart: "lún", char: "论", pyChar: "lùn" }
			]
		},
		{
			name: "日字旁（日）",
			radical: "日",
			pyRadical: "rì",
			items: [
				{ part: "月", pyPart: "yuè", char: "明", pyChar: "míng" },
				{ part: "免", pyPart: "miǎn", char: "晚", pyChar: "wǎn" },
				{ part: "乍", pyPart: "zhà", char: "昨", pyChar: "zuó" },
				{ part: "寸", pyPart: "cùn", char: "时", pyChar: "shí" },
				{ part: "央", pyPart: "yāng", char: "映", pyChar: "yìng" },
				{ part: "西", pyPart: "xī", char: "晒", pyChar: "shài" },
				{ part: "生", pyPart: "shēng", char: "星", pyChar: "xīng" },
				{ part: "青", pyPart: "qīng", char: "晴", pyChar: "qíng" }
			]
		},
		{
			name: "金字旁（钅）",
			radical: "钅",
			pyRadical: "jīn",
			items: [
				{ part: "十", pyPart: "shí", char: "针", pyChar: "zhēn" },
				{ part: "丁", pyPart: "dīng", char: "钉", pyChar: "dīng" },
				{ part: "中", pyPart: "zhōng", char: "钟", pyChar: "zhōng" },
				{ part: "冈", pyPart: "gāng", char: "钢", pyChar: "gāng" },
				{ part: "失", pyPart: "shī", char: "铁", pyChar: "tiě" },
				{ part: "戋", pyPart: "jiān", char: "钱", pyChar: "qián" },
				{ part: "昔", pyPart: "xī", char: "错", pyChar: "cuò" },
				{ part: "艮", pyPart: "gèn", char: "银", pyChar: "yín" },
				{ part: "竟", pyPart: "jìng", char: "镜", pyChar: "jìng" }
			]
		},
		{
			name: "火字旁（火）",
			radical: "火",
			pyRadical: "huǒ",
			items: [
				{ part: "丁", pyPart: "dīng", char: "灯", pyChar: "dēng" },
				{ part: "少", pyPart: "shǎo", char: "炒", pyChar: "chǎo" },
				{ part: "户", pyPart: "hù", char: "炉", pyChar: "lú" },
				{ part: "亢", pyPart: "kàng", char: "炕", pyChar: "kàng" },
				{ part: "巨", pyPart: "jù", char: "炬", pyChar: "jù" },
				{ part: "包", pyPart: "bāo", char: "炮", pyChar: "pào" },
				{ part: "乍", pyPart: "zhà", char: "炸", pyChar: "zhá" },
				{ part: "兰", pyPart: "lán", char: "烂", pyChar: "làn" },
				{ part: "考", pyPart: "kǎo", char: "烤", pyChar: "kǎo" },
				{ part: "尧", pyPart: "yáo", char: "烧", pyChar: "shāo" }
			]
		},
		{
			name: "土字旁（土）",
			radical: "土",
			pyRadical: "tǔ",
			items: [
				{ part: "也", pyPart: "yě", char: "地", pyChar: "dì" },
				{ part: "云", pyPart: "yún", char: "坛", pyChar: "tán" },
				{ part: "不", pyPart: "bù", char: "坏", pyChar: "huài" },
				{ part: "亢", pyPart: "kàng", char: "坑", pyChar: "kēng" },
				{ part: "夬", pyPart: "guài", char: "块", pyChar: "kuài" },
				{ part: "皮", pyPart: "pí", char: "坡", pyChar: "pō" },
				{ part: "申", pyPart: "shēn", char: "坤", pyChar: "kūn" },
				{ part: "旦", pyPart: "dàn", char: "坦", pyChar: "tǎn" },
				{ part: "成", pyPart: "chéng", char: "城", pyChar: "chéng" },
				{ part: "里", pyPart: "lǐ", char: "埋", pyChar: "mái" }
			]
		},
		{
			name: "禾字旁（禾）",
			radical: "禾",
			pyRadical: "hé",
			items: [
				{ part: "口", pyPart: "kǒu", char: "和", pyChar: "hé" },
				{ part: "中", pyPart: "zhōng", char: "种", pyChar: "zhǒng" },
				{ part: "斗", pyPart: "dǒu", char: "科", pyChar: "kē" },
				{ part: "少", pyPart: "shǎo", char: "秒", pyChar: "miǎo" },
				{ part: "火", pyPart: "huǒ", char: "秋", pyChar: "qiū" },
				{ part: "且", pyPart: "qiě", char: "租", pyChar: "zū" },
				{ part: "平", pyPart: "píng", char: "秤", pyChar: "chèng" },
				{ part: "央", pyPart: "yāng", char: "秧", pyChar: "yāng" },
				{ part: "多", pyPart: "duō", char: "移", pyChar: "yí" },
				{ part: "兑", pyPart: "duì", char: "税", pyChar: "shuì" }
			]
		}
	];

	const SETS_UD = [
		{
			name: "草字头（艹）",
			radical: "艹",
			pyRadical: "cǎo",
			items: [
				{ part: "早", pyPart: "zǎo", char: "草", pyChar: "cǎo" },
				{ part: "化", pyPart: "huà", char: "花", pyChar: "huā" },
				{ part: "监", pyPart: "jiān", char: "蓝", pyChar: "lán" },
				{ part: "平", pyPart: "píng", char: "苹", pyChar: "píng" },
				{ part: "田", pyPart: "tián", char: "苗", pyChar: "miáo" },
				{ part: "分", pyPart: "fēn", char: "芬", pyChar: "fēn" },
				{ part: "方", pyPart: "fāng", char: "芳", pyChar: "fāng" },
				{ part: "古", pyPart: "gǔ", char: "苦", pyChar: "kǔ" },
				{ part: "央", pyPart: "yāng", char: "英", pyChar: "yīng" },
				{ part: "包", pyPart: "bāo", char: "苞", pyChar: "bāo" },
				{ part: "旬", pyPart: "xún", char: "荀", pyChar: "xún" },
				{ part: "戊", pyPart: "wù", char: "茂", pyChar: "mào" },
				{ part: "矛", pyPart: "máo", char: "茅", pyChar: "máo" },
				{ part: "加", pyPart: "jiā", char: "茄", pyChar: "qié" },
				{ part: "冖玉", pyPart: "mì yù", char: "莹", pyChar: "yíng" },
				{ part: "冖虫", pyPart: "mì chóng", char: "萤", pyChar: "yíng" },
				{ part: "冖吕", pyPart: "mì lǚ", char: "营", pyChar: "yíng" },
				{ part: "余", pyPart: "yú", char: "茶", pyChar: "chá" },
				{ part: "约", pyPart: "yuē", char: "药", pyChar: "yào" },
				{ part: "采", pyPart: "cǎi", char: "菜", pyChar: "cài" },
				{ part: "牙", pyPart: "yá", char: "芽", pyChar: "yá" },
				{ part: "办", pyPart: "bàn", char: "苏", pyChar: "sū" },
				{ part: "乙", pyPart: "yǐ", char: "艺", pyChar: "yì" }
			]
		},
		{
			name: "宝盖头（宀）",
			radical: "宀",
			pyRadical: "mián",
			items: [
				{ part: "女", pyPart: "nǚ", char: "安", pyChar: "ān" },
				{ part: "子", pyPart: "zǐ", char: "字", pyChar: "zì" },
				{ part: "丁", pyPart: "dīng", char: "宁", pyChar: "níng" },
				{ part: "元", pyPart: "yuán", char: "完", pyChar: "wán" },
				{ part: "玉", pyPart: "yù", char: "宝", pyChar: "bǎo" },
				{ part: "豕", pyPart: "shǐ", char: "家", pyChar: "jiā" },
				{ part: "吕", pyPart: "lǚ", char: "宫", pyChar: "gōng" },
				{ part: "心", pyPart: "xīn", char: "宓", pyChar: "mì" },
				{ part: "匕", pyPart: "bǐ", char: "它", pyChar: "tā" },
				{ part: "寸", pyPart: "cùn", char: "守", pyChar: "shǒu" },
				{ part: "木", pyPart: "mù", char: "宋", pyChar: "sòng" },
				{ part: "厷", pyPart: "gōng", char: "宏", pyChar: "hóng" },
				{ part: "示", pyPart: "shì", char: "宗", pyChar: "zōng" },
				{ part: "头", pyPart: "tóu", char: "实", pyChar: "shí" }
			]
		},
		{
			name: "雨字头（雨）",
			radical: "雨",
			pyRadical: "yǔ",
			items: [
				{ part: "田", pyPart: "tián", char: "雷", pyChar: "léi" },
				{ part: "令", pyPart: "lìng", char: "零", pyChar: "líng" },
				{ part: "相", pyPart: "xiāng", char: "霜", pyChar: "shuāng" },
				{ part: "包", pyPart: "bāo", char: "雹", pyChar: "báo" },
				{ part: "彐", pyPart: "jì", char: "雪", pyChar: "xuě" },
				{ part: "路", pyPart: "lù", char: "露", pyChar: "lù" },
				{ part: "务", pyPart: "wù", char: "雾", pyChar: "wù" },
				{ part: "而", pyPart: "ér", char: "需", pyChar: "xū" },
				{ part: "辰", pyPart: "chén", char: "震", pyChar: "zhèn" },
				{ part: "每", pyPart: "měi", char: "霉", pyChar: "méi" }
			]
		},
		{
			name: "竹字头（⺮）",
			radical: "⺮",
			pyRadical: "zhú",
			items: [
				{ part: "毛", pyPart: "máo", char: "笔", pyChar: "bǐ" },
				{ part: "寺", pyPart: "sì", char: "等", pyChar: "děng" },
				{ part: "合", pyPart: "hé", char: "答", pyChar: "dá" },
				{ part: "者", pyPart: "zhě", char: "箸", pyChar: "zhù" },
				{ part: "夭", pyPart: "yāo", char: "笑", pyChar: "xiào" },
				{ part: "弟", pyPart: "dì", char: "第", pyChar: "dì" },
				{ part: "官", pyPart: "guān", char: "管", pyChar: "guǎn" },
				{ part: "间", pyPart: "jiān", char: "简", pyChar: "jiǎn" },
				{ part: "相", pyPart: "xiāng", char: "箱", pyChar: "xiāng" },
				{ part: "监", pyPart: "jiān", char: "篮", pyChar: "lán" }
			]
		},
		{
			name: "穴宝盖（穴）",
			radical: "穴",
			pyRadical: "xué",
			items: [
				{ part: "工", pyPart: "gōng", char: "空", pyChar: "kōng" },
				{ part: "牙", pyPart: "yá", char: "穿", pyChar: "chuān" },
				{ part: "犬", pyPart: "quǎn", char: "突", pyChar: "tū" },
				{ part: "九", pyPart: "jiǔ", char: "究", pyChar: "jiū" },
				{ part: "力", pyPart: "lì", char: "穷", pyChar: "qióng" },
				{ part: "囱", pyPart: "cōng", char: "窗", pyChar: "chuāng" }
			]
		},
		{
			name: "网字头（四字头）",
			radical: "罒",
			pyRadical: "wǎng",
			items: [
				{ part: "夕", pyPart: "xī", char: "罗", pyChar: "luó" },
				{ part: "去", pyPart: "qù", char: "罢", pyChar: "bà" },
				{ part: "非", pyPart: "fēi", char: "罪", pyChar: "zuì" },
				{ part: "直", pyPart: "zhí", char: "置", pyChar: "zhì" },
				{ part: "者", pyPart: "zhě", char: "署", pyChar: "shǔ" },
				{ part: "卓", pyPart: "zhuō", char: "罩", pyChar: "zhào" }
			]
		}
	];

	window.HZ_GAME_DATA = {
		SETS_LR,
		SETS_UD
	};
})();
