const dom = {
  create(string) {
    const template = document.createElement("template");
    template.innerHTML = string.trim();
    return template.content.firstChild;
  },
  after(node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling);
  },
  before(node, newNode) {
    node.parentNode.insertBefore(newNode, node);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(node, parent) {
    if (typeof arguments[1] === "string") {
      const parentElement = this.create(parent);
      node.before(parentElement);
      this.append(parentElement, node);
    } else {
      node.before(parent);
      this.append(parent, node);
    }
  },
  remove(node) {
    node.remove();
    return node;
  },
  empty(parent) {
    Array.from(parent.childNodes).forEach(node => node.remove());
    return parent;
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        const object = name;
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            node.style[key] = object[key];
          }
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    }
  },
  on(node, event, fn) {
    node.addEventListener(event, fn);
  },
  off(node, event, fn) {
    node.removeEventListener(event, fn);
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parent.childNodes).filter(n => n !== node);
  },
  next(node) {
    return node.nextElementSibling;
  },
  previous(node) {
    return node.previousElementSibling;
  },
  each(nodeList, fn) {
    Array.from(nodeList.children).forEach(node => {
      fn.call(null, node);
    });
  },
  indexOf(node) {
    const list = this.children(node.parentNode);
    let i = 0;
    for (i; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  }
};
