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
				{ part: "合", pyPart: "hé", char: "哈", pyChar: "hā" }
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
				{ part: "曷", pyPart: "hé", char: "渴", pyChar: "kě" }
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
				{ part: "每", pyPart: "měi", char: "悔", pyChar: "huǐ" }
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
				{ part: "乃", pyPart: "nǎi", char: "奶", pyChar: "nǎi" }
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
				{ part: "乍", pyPart: "zhà", char: "作", pyChar: "zuò" }
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
				{ part: "冖吕", pyPart: "mì lǚ", char: "营", pyChar: "yíng" }
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
				{ part: "心", pyPart: "xīn", char: "宓", pyChar: "mì" }
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
				{ part: "包", pyPart: "bāo", char: "雹", pyChar: "báo" }
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
				{ part: "者", pyPart: "zhě", char: "箸", pyChar: "zhù" }
			]
		}
	];

	window.HZ_GAME_DATA = {
		SETS_LR,
		SETS_UD
	};
})();
