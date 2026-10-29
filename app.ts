interface Product {
    readonly id: number; // mahsulotning unikal identifikatori
    readonly name: string; // mahsulot nomi
    price: number; // mahsulot narxi
    category: string; // mahsulot turkumi
    description?: string; // (ixtiyoriy) mahsulot haqida tavsif
}

class ProductManager {
    private products: Product[] = []; // mahsulotlar shu yerda saqlanadi

    createProduct(product: Product): void {
        this.products.push(product);
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    updateProduct(id: number, updates: Partial<Omit<Product, "id" | "name">>): void {
        const product = this.getProductById(id);
        if (product) {
            Object.assign(product, updates);
        }
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(p => p.id !== id);
    }

    getProductsByCategory(category: string): Product[] {
        return this.products.filter(p => p.category === category);
    }

    getProductsUnderPrice(maxPrice: number): Product[] {
        return this.products.filter(p => p.price < maxPrice);
    }
}

const manager = new ProductManager();
// Mahsulot qo‘shish
manager.createProduct({ id: 1, name: "iPhone 12", price: 999, category: "Smartphone" });
manager.createProduct({ id: 2, name: "Samsung Galaxy S21", price: 899, category: "Smartphone" });

// Barcha mahsulotlarni olish
    console.log(manager.getAllProducts());
    // ID bo‘yicha mahsulotni olish
    console.log(manager.getProductById(1));
    // Mahsulotni yangilash
    manager.updateProduct(2, { price: 799 });
    console.log(manager.getProductById(2));
    // Mahsulotni o‘chirish
    manager.deleteProduct(1);
     console.log(manager.getAllProducts());
    // Qo‘shimcha funksiyalarni tekshirish
    console.log(manager.getProductsByCategory("Smartphone"));
    console.log(manager.getProductsUnderPrice(800));
