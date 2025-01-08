class UserCard extends HTMLElement {
  static observedAttributes = ["image"]; // 一个包含元素需要变更通知的所有属性名称的数组
  constructor() {
    super();
  }
  connectedCallback() {
    const root = document.querySelector("#app");
    // mode模式：shadow root的内部实现是否可被 JavaScript 访问及修改
    const shadowRoot = root.attachShadow({ mode: "open" });
    const templateElem = document.getElementById("userCardTemplate");
    const content = templateElem.content.cloneNode(true);
    content.querySelector(".image").setAttribute("src", this.getAttribute("image"));
    content.querySelector(".container>.name").innerText = this.getAttribute("name");
    content.querySelector(".container>.email").innerText = this.getAttribute("email");
    this.button = content.querySelector("button");
    this.button.addEventListener("click", () => {
      alert("你点击我了");
    });
    shadowRoot.appendChild(content);
    console.log("自定义元素添加至页面", "mode=open", root.shadowRoot);
  }
  // 每当元素从文档中移除时调用
  disconnectedCallback() {
    console.log("自定义元素从页面中移除");
  }
  // 每当元素被移动到新文档中时调用。
  adoptedCallback() {
    console.log("自定义元素移动至新页面");
  }
  // 在属性更改、添加、移除或替换时调用
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已变更。`, "第一次就会执行observedAttributes中包含的属性");
  }
}

// Window对象上的一个只读属性,接口返回一个CustomElementRegistry对象的引用;
const customElementRegistry = window.customElements;
// 定义和注册的自定义元素,元素的名称:必须以小写字母开头,包含一个连字符
customElementRegistry.define("user-card", UserCard, {});

// console.log(customElementRegistry);
// console.log(customElementRegistry.get("user-card"));
