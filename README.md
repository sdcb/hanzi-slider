# hanzi-slider（汉字抽抽乐）

给孩子玩的汉字偏旁组合「抽抽乐」小游戏：先选结构（左右 / 上下），再选偏旁，通过鼠标拖动滑块，让偏旁与部件自由组合出不同汉字，并为偏旁/部件/整字标注带声调拼音。

- 生产环境：https://hanzi-slider.sdcb.ai/

---

## 玩法

1. 选择结构：左右结构 / 上下结构
2. 选择偏旁（会根据结构联动更新）
3. 在蒙版窗口中拖动滑块：
   - 左右结构：上下拖动（部件竖排）
   - 上下结构：左右拖动（部件横排）
4. 下方会显示当前组合出的汉字与拼音（并展示拆解公式）

---

## 功能特点

- 纯静态：无需后端，打开即玩
- 结构化抽拉：
  - 左右结构：偏旁固定在左，部件在右侧滑动
  - 上下结构：偏旁固定在上，部件在下方滑动
- 拼音标注（含声调）：
  - 左右结构：拼音在字上方
  - 上下结构：拼音在字左侧
- 蒙版效果：滑动时可看到“字条”在蒙版下移动
- 随机选择：一键随机结构 + 偏旁，适合小朋友探索

---

## 本地运行

这是纯 HTML/CSS/JS 项目，本地运行最简单的方式：

- 直接用浏览器打开 `index.html`

如果你更喜欢本地静态服务器（可避免某些浏览器的路径限制），可以用任意方式启动，例如：

- VS Code 安装扩展 “Live Server”，右键 `index.html` -> Open with Live Server

---

## 数据结构（可扩充字库）

所有字库在 `js/data.js` 中，通过 `window.HZ_GAME_DATA` 暴露：

- `SETS_LR`：左右结构（偏旁在左，部件可滑动）
- `SETS_UD`：上下结构（偏旁在上，部件可滑动）

每个集合示例（简化说明）：

```js
{
  name: "草字头（艹）",
  radical: "艹",
  pyRadical: "cǎo",
  items: [
    { part: "早", pyPart: "zǎo", char: "草", pyChar: "cǎo" }
  ]
}
```

提示：
- `pyRadical / pyPart / pyChar` 建议填写带声调拼音（如 `hǎo`、`jiāng`）。

---

## 部署（Cloudflare Pages + GitHub Actions）

本项目使用 GitHub Actions 自动部署到 Cloudflare Pages。

- 工作流文件：`.github/workflows/deploy.yml`
- 触发：推送到 `main` 分支（以及 PR 到 `main`）

你需要在 GitHub 仓库 Settings -> Secrets and variables -> Actions 中配置：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

---

## 项目结构

- `index.html`：页面入口
- `css/style.css`：样式（蒙版/布局/拼音排版等）
- `js/game.js`：交互逻辑（拖动、吸附、结构切换、随机等）
- `js/data.js`：字库数据

---

## 贡献

欢迎提交 PR 来增加偏旁集合、补充更多常用字、优化交互体验。

---

## 许可证

本项目使用 MIT License，详情见 [LICENSE](LICENSE)。
