// 1. Abstract Base Class (Abstraction)
abstract class UIElement {
    protected _id: string;

    constructor(id: string) {
        this._id = id;
    }

    // এটি এখন স্ট্রিং বা কনসোল নয়, সরাসরি আসল HTML Element রিটার্ন করবে
    public abstract render(): HTMLElement;
}

// 2. Input Element
class InputElement extends UIElement {
    private _type: string;
    private _placeholder: string;

    constructor(id: string, type: string, placeholder: string = "Enter text here") {
        super(id);
        this._type = type;
        this._placeholder = placeholder;
    }

    public render(): HTMLElement {
        const input = document.createElement("input");
        input.id = this._id;
        input.type = this._type;
        input.placeholder = this._placeholder;
        input.className = "p-2 border rounded m-2"; // চাইলে স্টাইলও দিতে পারেন
        return input;
    }
}

// 3. Button Element
class ButtonElement extends UIElement {
    private _label: string;

    constructor(id: string, label: string) {
        super(id);
        this._label = label;
    }

    public render(): HTMLElement {
        const button = document.createElement("button");
        button.id = this._id;
        button.textContent = this._label;
        button.className = "px-4 py-2 bg-blue-500 text-white rounded m-2";
        return button;
    }
}

// 4. Paragraph Element
class ParagraphElement extends UIElement {
    private _text: string;

    constructor(id: string, text: string) {
        super(id);
        this._text = text;
    }

    public render(): HTMLElement {
        const p = document.createElement("p");
        p.id = this._id;
        p.textContent = this._text;
        p.className = "text-red-500 m-2";
        return p;
    }
}

// 5. Mini DOM Manager (আসল HTML পেজে এলিমেন্ট ইনজেক্ট করবে)
class MiniDOM {
    private _elements: UIElement[] = [];
    private _container: HTMLElement;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id "${containerId}" not found!`);
        }
        this._container = container;
    }

    public addElement(element: UIElement): void {
        this._elements.push(element);
    }

    // এলিমেন্টগুলো ব্রাউজারের DOM-এ রেন্ডার বা ইনজেক্ট করার মেথড
    public renderDOM(): void {
        this._container.innerHTML = ""; // কন্টেইনার আগে পরিষ্কার করে নেওয়া
        for (const el of this._elements) {
            const domNode = el.render(); // প্রতিটি এলিমেন্ট নিজস্ব DOM নোড তৈরি করছে
            this._container.appendChild(domNode); // ব্রাউজারে যুক্ত হচ্ছে
        }
    }
}


// --- ব্রাউজারে রান করার অংশ ---

// ধরা যাক আপনার index.html ফাইলে <div id="app"></div> নামে একটি ট্যাগ আছে
const myPage = new MiniDOM("app");

// উপাদানগুলো যোগ করছি
myPage.addElement(new InputElement("username-input", "text", "Enter your email"));
myPage.addElement(new InputElement("pass-input", "password", "Enter password"));
myPage.addElement(new ParagraphElement("error-msg", "Please fill up all fields."));
myPage.addElement(new ButtonElement("submit-btn", "Login Now"));

// পেজে ইনজেক্ট করার জন্য কল করা হলো
myPage.renderDOM();

export {};