// Menu Data
const menuData = [
    {
        id: "south_indian",
        name_en: "South Indian Delicious",
        name_ar: "مأكولات جنوب هندية",
        icon: "🥘",
        items: [
            // Page 1 - Left Column
            { name_en: "Idly (2 Nos.)", name_ar: "إدلي", price: "0.550" },
            { name_en: "Mini Idly", name_ar: "ميني إدلي", price: "0.700" },
            { name_en: "Upuma", name_ar: "أوبما", price: "0.700" },
            { name_en: "Vada (2 Nos.)", name_ar: "فادا", price: "0.550" },
            { name_en: "Dahi Vada (2 Nos.)", name_ar: "داهي فادا", price: "0.800" },
            { name_en: "Plain Uthappam", name_ar: "أوثابام عادي", price: "0.700" },
            { name_en: "Poori Bhaji", name_ar: "بوري باجي", price: "0.750" },
            { name_en: "Kesary Bath (Thurs)", name_ar: "حمام كيساري (الخميس)", price: "0.700" },
            { name_en: "Chow Chow Bath (Thurs)", name_ar: "حمام تشاو تشاو (الخميس)", price: "0.700" },
            { name_en: "Pongal", name_ar: "بونجال", price: "0.800" },
            { name_en: "Cap Dosa", name_ar: "كاب دوسا", price: "0.900" },
            { name_en: "Set Dosa", name_ar: "تعيين دوسا", price: "0.900" },
            { name_en: "Kal Dosa", name_ar: "كال دوسا", price: "0.800" },
            { name_en: "Podi Dosa", name_ar: "بودي دوسا", price: "0.900" },
            { name_en: "Butter Masala Dosa", name_ar: "زبدة ماسالا دوسا", price: "1.000" },
            { name_en: "Sada (Plain) Dosa", name_ar: "سدى (عادي) دوسا", price: "0.600" },
            { name_en: "Ghee Roast", name_ar: "جي روست", price: "0.700" },
            { name_en: "Masala Dosa", name_ar: "ماسالا دوسا", price: "0.700" },
            { name_en: "Mysore Masala Dosa", name_ar: "ميسور ماسالا دوسا", price: "0.800" },
            { name_en: "Onion Dosa", name_ar: "دوسا البصل", price: "0.850" },
            { name_en: "Rava (Plain)", name_ar: "راوا (عادي)", price: "0.900" },
            { name_en: "Onion Rava Dosai", name_ar: "البصل راوا دوسا", price: "1.000" },
            { name_en: "Onion Rava Masala", name_ar: "بصل رافا ماسالا", price: "1.100" },
            { name_en: "Paper Dosai", name_ar: "رقائق دوسا", price: "1.100" },

            // Page 1 - Right Column
            { name_en: "Paper Ghee Dosai", name_ar: "سمن ورق دوسا", price: "1.200" },
            { name_en: "Paniyaram", name_ar: "بانيارام", price: "1.000" },
            { name_en: "Paper Ghee Masala", name_ar: "سمن ورق ماسالا", price: "1.300" },
            { name_en: "Onion Dosai Masala", name_ar: "بصل دوساي ماسالا", price: "1.000" },
            { name_en: "Onion Uthappam", name_ar: "بصل أوثابام", price: "1.000" },
            { name_en: "Chettynadu Masala Dosa", name_ar: "تشيتينادو ماسالا دوسا", price: "0.900" },
            { name_en: "Cashew Nut Uthappam", name_ar: "الكاجو أوثابام", price: "1.100" },
            { name_en: "Tomato Onion Uthappam", name_ar: "الطماطم والبصل أوثابام", price: "1.100" },
            { name_en: "Palak Uthappam", name_ar: "بالاك أوثابام", price: "0.900" },
            { name_en: "Pesarot Upuma Dosa", name_ar: "بيساروت أوبوما دوسا", price: "1.000" },
            { name_en: "Idiyappam", name_ar: "إيديابام", price: "0.800" },
            { name_en: "Adai Aviyal (Fri)", name_ar: "أداي أفيال (الجمعة)", price: "0.900" },
            { name_en: "Spring Dosa (Mon)", name_ar: "دوسا الربيع (الاثنين)", price: "0.900" },
            { name_en: "Neer Dosa (Tue)", name_ar: "نير دوسا (الثلاثاء)", price: "0.900" },
            { name_en: "Idly Manchurian Dosa (Wed)", name_ar: "إدلي منشوريا دوسا (الأربعاء)", price: "1.000" },
            { name_en: "Manchurian Dosa", name_ar: "دوسا منشوريا", price: "1.100" },
            { name_en: "Paneer Dosa", name_ar: "بانير دوسا", price: "0.900" },
            { name_en: "Paneer Masala Dosa", name_ar: "بانير ماسالا دوسا", price: "1.100" },
            { name_en: "Cheese Palak Dosa", name_ar: "جبنة بالاك دوسا", price: "1.000" },
            { name_en: "Palak Dosa", name_ar: "بالاك دوسا", price: "0.800" },
            { name_en: "3 Taste Dosa (Sun)", name_ar: "3 تذوق دوسة (الأحد)", price: "1.000" },
            { name_en: "Chinese Dosa (Sat)", name_ar: "دوسا الصينية (السبت)", price: "0.900" },
            { name_en: "Cheese Dosa", name_ar: "دوسا الجبن", price: "0.800" },
            { name_en: "Cheese Palak Masala", name_ar: "جبنة بالاك ماسالا", price: "1.000" },

            // Page 2 - Left Column
            { name_en: "Cheese Masala Dosa", name_ar: "جبنة ماسالا دوسا", price: "0.900" },
            { name_en: "Tomato Kichadi", name_ar: "طماطم كيشادي", price: "0.900" },
            { name_en: "Mysore Bonda", name_ar: "ميسور بوندا", price: "0.650" },
            { name_en: "Idly Fry", name_ar: "إيدلي فراي", price: "0.800" },

            // Page 2 - Right Column
            { name_en: "Vada Cury", name_ar: "فادا كوري", price: "1.000" },
            { name_en: "Atta Dosa", name_ar: "عطا دوسا", price: "0.800" },
            { name_en: "Rava Masala", name_ar: "راوا ماسالا", price: "1.000" },
            { name_en: "Ghee Masala", name_ar: "سمن ماسالا", price: "0.800" },
            { name_en: "Mashroom Masala Dosa", name_ar: "مشروم ماسالا دوسا", price: "1.200" }
        ]
    },
    {
        id: "north_indian",
        name_en: "North Indian Delicious",
        name_ar: "مأكولات شمال هندية",
        icon: "🍛",
        items: [
            { name_en: "Dal Fry", name_ar: "دال فراي", price: "1.000" },
            { name_en: "Dal Tadukka", name_ar: "دال تادكا", price: "1.100" },
            { name_en: "Channa Masala", name_ar: "شانا ماسالا", price: "1.400" },
            { name_en: "Bendi Masala", name_ar: "بهندي ماسالا", price: "1.300" },
            { name_en: "Bendi Fry", name_ar: "بهندي فراي", price: "1.400" },
            { name_en: "Baingen Baratha", name_ar: "بهارات بينجان", price: "1.400" },
            { name_en: "Baingen Masala", name_ar: "بينجان ماسالا", price: "1.300" },
            { name_en: "Plain Palak", name_ar: "بالاك عادي", price: "1.200" },
            { name_en: "Paneer Palak", name_ar: "بانير بالاك", price: "1.500" },
            { name_en: "Plain Burji", name_ar: "بالاك بورجي", price: "1.800" },
            { name_en: "Paneer Butter Masala", name_ar: "بانير زبدة ماسالا", price: "1.500" },
            { name_en: "Paneer Tikka Masala", name_ar: "بانير تيكا ماسالا", price: "1.500" },
            { name_en: "Mutter Paneer", name_ar: "موتر بانير", price: "1.500" },
            { name_en: "Paneer Kadai", name_ar: "بانير كاداي", price: "1.500" },
            { name_en: "Paneer Shahi Kurma", name_ar: "بانير شاهي كورما", price: "1.500" },
            { name_en: "Paneer Kurma", name_ar: "بانير كورما", price: "1.500" },
            { name_en: "Mix Vegetable Shahi Kurma", name_ar: "مزيج الخضار شاهي كورما", price: "1.500" },
            { name_en: "Navarathna Kurma", name_ar: "نافاراتنا كورما", price: "1.500" },
            { name_en: "Tomato Peas Curry", name_ar: "كاري بازلاء الطماطم", price: "1.300" },
            { name_en: "Gobi Mutter", name_ar: "جوبي موتر", price: "1.500" },
            { name_en: "Green Peas Masala", name_ar: "البازلاء الخضراء ماسالا", price: "1.300" },
            { name_en: "Vegetable Kurma", name_ar: "كورما الخضار", price: "1.300" },
            { name_en: "Alu Gobi", name_ar: "ألو جوبي", price: "1.400" },
            { name_en: "Alu Palak", name_ar: "ألو بالاك", price: "1.400" },
            { name_en: "Vegetable Kofta", name_ar: "كفتة خضار", price: "1.400" },
            { name_en: "Malai Kofta", name_ar: "كفتة مالاي", price: "1.400" },
            { name_en: "Dum Alu Kasmiri", name_ar: "دوم ألو كشميري", price: "1.500" },
            { name_en: "Tomoto fry", name_ar: "طماطم مقلية", price: "1.200" },
            { name_en: "Pototo Fry", name_ar: "بطاطس مقلية", price: "1.000" },
            { name_en: "Annapoorna Spl. Curry", name_ar: "أنابورنا سبل. كاري", price: "1.800" },
            { name_en: "Kadai Hydrabadi", name_ar: "كاداي حيدرآبادي", price: "1.400" },
            { name_en: "Stuffed Tomoto", name_ar: "طماطم محشوة", price: "1.400" },
            { name_en: "Vegetable Makkanwala", name_ar: "مكانا والا الخضار", price: "1.500" },
            { name_en: "Vegetable Kadai", name_ar: "كاداي الخضار", price: "1.500" },
            { name_en: "Vegetable Kolapuri", name_ar: "كولابوري الخضار", price: "1.500" },
            { name_en: "Mashroom Masala", name_ar: "مشروم ماسالا", price: "1.500" },
            { name_en: "Alu Simla Masala", name_ar: "ألو شيملا ماسالا", price: "1.400" },
            { name_en: "Kajoo Curry", name_ar: "كاجو كاري", price: "1.800" },
            { name_en: "Thakkali Thokku", name_ar: "ثاكالي ثوكو", price: "1.100" },
            { name_en: "Potato Fry", name_ar: "بطاطس مقلية", price: "1.100" }
        ]
    },
    {
        id: "rice_items",
        name_en: "Rice Items",
        name_ar: "أطباق الأرز",
        icon: "🍚",
        items: [
            { name_en: "Lemon Rice", name_ar: "أرز بالليمون", price: "1.300" },
            { name_en: "Tomato Rice", name_ar: "أرز بالطماطم", price: "1.300" },
            { name_en: "Puliyogara", name_ar: "بوليوجاري", price: "1.300" },
            { name_en: "Ghee Rice", name_ar: "أرز بالسمن", price: "1.300" },
            { name_en: "Jeera Rice", name_ar: "جيرا أرز", price: "1.300" },
            { name_en: "Peas Pulav", name_ar: "البازلاء بولاف", price: "1.500" },
            { name_en: "Vegetable Pulav", name_ar: "بولاف الخضار", price: "1.500" },
            { name_en: "Vegetable Biriyani", name_ar: "برياني خضار", price: "1.500" },
            { name_en: "Paneer & Veg Pulav", name_ar: "بانير وبولاف خضار", price: "1.600" },
            { name_en: "Curd Rice", name_ar: "اللبن الرائب رايس", price: "1.000" },
            { name_en: "Navarathna Pulav", name_ar: "نافاراتنا بولاف", price: "1.600" },
            { name_en: "Vegetable Fried Rice", name_ar: "أرز مقلي بالخضار", price: "1.400" },
            { name_en: "Annapoorna Spl Fried Rice", name_ar: "أرز أنابورنا المقلي الخاص", price: "1.800" },
            { name_en: "Schezwan Fried Rice", name_ar: "أرز شيزوان مقلي", price: "1.500" },
            { name_en: "Vegetable Noodles", name_ar: "نودلز خضار", price: "1.500" },
            { name_en: "Schezwan Noodles", name_ar: "نودلز شيزوان", price: "1.600" },
            { name_en: "Jeera Fried Rice", name_ar: "جيرا فرايد رايس", price: "1.300" },
            { name_en: "Mushroom Fried Rice", name_ar: "أرز مقلي بالفطر", price: "1.600" },
            { name_en: "Paneer Biriyani", name_ar: "بانير برياني", price: "1.600" },
            { name_en: "Bisi Bele Bath", name_ar: "حمام بيسي بيلي", price: "1.400" }
        ]
    },
    {
        id: "chat_items",
        name_en: "Chat Items",
        name_ar: "شات ومقبلات",
        icon: "🍢",
        items: [
            { name_en: "Pani Puri", name_ar: "باني بوري", price: "0.700" },
            { name_en: "Bhel Puri", name_ar: "بيل بوري", price: "0.800" },
            { name_en: "Sev Puri", name_ar: "سيف بوري", price: "0.800" },
            { name_en: "Dahi Puri", name_ar: "داهي بوري", price: "0.800" },
            { name_en: "Vada Pav", name_ar: "فادا باف", price: "0.400" },
            { name_en: "Cutlet (2 Nos.)", name_ar: "كستلاتة (عدد 2)", price: "0.500" },
            { name_en: "Mix Pakoda", name_ar: "مزيج باكودا", price: "0.650" },
            { name_en: "Goli Baji", name_ar: "قولي باجي", price: "0.650" },
            { name_en: "Pav Bhaji", name_ar: "باف باجي", price: "0.800" },
            { name_en: "Extra Pav", name_ar: "كسترا باف", price: "0.100" },
            { name_en: "Punjabi Samosa", name_ar: "سمبوسة بنجابية", price: "0.300" },
            { name_en: "Potato Bonda", name_ar: "بوتوتو بوندا", price: "0.300" },
            { name_en: "Raitha", name_ar: "ريثا", price: "0.300" },
            { name_en: "French Fry", name_ar: "فراي الفرنسية", price: "0.500" },
            { name_en: "Masala Papad", name_ar: "ماسالا باباد", price: "0.300" },
            { name_en: "Chapathi Sandwich", name_ar: "ساندويتس الشباتي", price: "0.200" },
            { name_en: "Parota Sandwich", name_ar: "ساندويتش باروتا", price: "0.300" },
            { name_en: "Onion Pakoda", name_ar: "باكودا البصل", price: "0.400" },
            { name_en: "Green Salad", name_ar: "سلطة خضراء", price: "0.500" },
            { name_en: "Buns (1 Nos.)", name_ar: "اللكعك", price: "0.300" },
            { name_en: "Bread Butter Jam", name_ar: "مربى الخبز بالزبدة", price: "0.500" },
            { name_en: "Bread Toast", name_ar: "خبز محمص", price: "0.500" },
            { name_en: "Bread Paneer Toast", name_ar: "خبز بانير توست", price: "0.800" },
            { name_en: "Bread Sandwich", name_ar: "ساندوتش خبز", price: "0.500" }
        ]
    },
    {
        id: "lunch_items",
        name_en: "Lunch Items",
        name_ar: "وجبات الغداء",
        icon: "🍽️",
        items: [
            { name_en: "South Indian Thali", name_ar: "جنوب الهند ثالي", price: "1.250" },
            { name_en: "Special Meals", name_ar: "وجبات خاصة", price: "1.500" },
            { name_en: "South Indian Banana Leaf Thali (Fri)", name_ar: "ثالي أوراق الموز (الجمعة)", price: "1.350" },
            { name_en: "Steam Rice Only", name_ar: "أرز بالبخار فقط", price: "0.400" },
            { name_en: "Rasam Only", name_ar: "رسام فقط", price: "0.500" },
            { name_en: "Sambar Only", name_ar: "سامبر فقط", price: "0.500" },
            { name_en: "South Indian Curry", name_ar: "كاري جنوب الهند", price: "0.500" }
        ]
    },
    {
        id: "soups",
        name_en: "Soups",
        name_ar: "شوربة",
        icon: "🥣",
        items: [
            { name_en: "Tomato Soup", name_ar: "حساء الطماطم", price: "0.800" },
            { name_en: "Sweet Corn Soup", name_ar: "شوربة الذرة الحلوة", price: "0.800" },
            { name_en: "Hot & Sour Soup", name_ar: "شوربة حارة وحامضة", price: "0.800" },
            { name_en: "Vegetable Clear Soup", name_ar: "شوربة الخضار الصافية", price: "0.800" },
            { name_en: "Mushroom Soup", name_ar: "حساء مشروم", price: "0.900" },
            { name_en: "Cream of Vegetable", name_ar: "كريمة الخضار", price: "0.800" },
            { name_en: "Manchow Soup", name_ar: "حساء المانشو", price: "1.000" }
        ]
    },
    {
        id: "chapathi_parota",
        name_en: "Chapathi & Parota Items",
        name_ar: "شباتي وباراتا",
        icon: "🫓",
        items: [
            { name_en: "Special Chapathi (1 No.)", name_ar: "جباتي خاص (رقم 1)", price: "0.150" },
            { name_en: "Normal Chapathi (2 No.)", name_ar: "جباتي عادي (رقم 2)", price: "0.100" },
            { name_en: "Cylone Parota", name_ar: "باردا باروتا", price: "0.300" },
            { name_en: "Alu Parota", name_ar: "ألو باروتا", price: "0.800" },
            { name_en: "Parota", name_ar: "باروتا", price: "0.200" },
            { name_en: "Channa Batora", name_ar: "تشانا باتورا", price: "1.100" },
            { name_en: "Channa Poori", name_ar: "تشانا بوري", price: "1.000" },
            { name_en: "Extra Batora", name_ar: "باتورا اضافية", price: "0.600" },
            { name_en: "Extra Poori", name_ar: "بوري اضافية", price: "0.100" },
            { name_en: "Chilly Parota", name_ar: "سيلون باروتا", price: "1.500" },
            { name_en: "Kotthu Parota", name_ar: "كوثو باروتا", price: "1.500" },
            { name_en: "5 Chapathi Curry", name_ar: "5 شباتي كاري", price: "0.900" },
            { name_en: "3 Spl. Chapathi Curry", name_ar: "3 سبل. تشاباتي كاري", price: "0.900" },
            { name_en: "2 Parota Curry", name_ar: "2 باروتا كاري", price: "0.900" },
            { name_en: "1 Parota Curry", name_ar: "1 باروتا كاري", price: "0.500" },
            { name_en: "Atta Parota", name_ar: "عطا باروتا", price: "0.200" },
            { name_en: "Ghee Chapathi (1 Nos.)", name_ar: "سمن شباتي (عدد واحد)", price: "0.100" }
        ]
    },
    {
        id: "hot_beverages",
        name_en: "Hot & Beverages",
        name_ar: "مشروبات ساخنة",
        icon: "☕",
        items: [
            { name_en: "Filter Coffee", name_ar: "قهوة مفلترة", price: "0.300" },
            { name_en: "Nescafe", name_ar: "نسكافيه", price: "0.300" },
            { name_en: "Bru Coffee", name_ar: "قهوة برو", price: "0.300" },
            { name_en: "Boost", name_ar: "يعزز", price: "0.400" },
            { name_en: "Horlicks", name_ar: "هورليكس", price: "0.400" },
            { name_en: "Mix Tea", name_ar: "مزج الشاي", price: "0.200" },
            { name_en: "Masala Tea", name_ar: "شاي ماسالا", price: "0.200" },
            { name_en: "Corona Tea", name_ar: "شاي كورونا", price: "0.300" },
            { name_en: "Water Big Bottle", name_ar: "زجاجة ماء كبيرة", price: "0.200" },
            { name_en: "Water Small Bottle", name_ar: "زجاجة ماء صغيرة", price: "0.100" },
            { name_en: "Cool Drinks", name_ar: "مشروبات باردة", price: "0.300" },
            { name_en: "Packet Juice", name_ar: "عصير باكيت", price: "0.150" }
        ]
    },
    {
        id: "tandoori",
        name_en: "Tandoori Items",
        name_ar: "تاندوري",
        icon: "🥙",
        items: [
            { name_en: "Nan", name_ar: "نان", price: "0.250" },
            { name_en: "Butter Nan", name_ar: "زبدة نان", price: "0.300" },
            { name_en: "Kashmiri Nan", name_ar: "كشميري نان", price: "0.700" },
            { name_en: "Kulcha", name_ar: "كولشا", price: "0.400" },
            { name_en: "Stuffed Kulcha", name_ar: "كولشا محشوة", price: "0.800" },
            { name_en: "Methi Kulcha", name_ar: "ميثي كولشا", price: "0.700" },
            { name_en: "Onion Masala Kulcha", name_ar: "بصل ماسالا كولشا", price: "0.800" },
            { name_en: "Pudina Kulcha", name_ar: "بودينا كولشا", price: "0.700" },
            { name_en: "Methi Roti", name_ar: "ميثي روتي", price: "0.400" },
            { name_en: "Roti", name_ar: "روتي", price: "0.250" },
            { name_en: "Butter Roti", name_ar: "روتي بالزبدة", price: "0.300" },
            { name_en: "Tandoori Paratha", name_ar: "تندوري براتا", price: "0.300" },
            { name_en: "Stuffed Paratha", name_ar: "براتا محشوة", price: "0.800" },
            { name_en: "Rumal Roti", name_ar: "روما روتي", price: "0.300" }
        ]
    },
    {
        id: "chinese",
        name_en: "Chinese Delicious",
        name_ar: "أطباق صينية",
        icon: "🍜",
        items: [
            { name_en: "Chinese Chopsuey", name_ar: "الشوبسوي الصيني", price: "1.800" },
            { name_en: "American Chopsuey", name_ar: "الشوبسوي الأمريكي", price: "1.800" },
            { name_en: "Babycorn Manchurian", name_ar: "بيبيكورن منشوريا", price: "1.800" },
            { name_en: "Gobi 65", name_ar: "جوبي 65", price: "1.800" },
            { name_en: "Paneer 65", name_ar: "بانير 65", price: "1.800" },
            { name_en: "Mushroom 65", name_ar: "مشروم 65", price: "1.800" },
            { name_en: "Gobi Manchurian", name_ar: "جوبي منشوريا", price: "1.700" },
            { name_en: "Mushroom Manchurian", name_ar: "مشروم منشوريا", price: "1.700" },
            { name_en: "Vegetable Manchurian", name_ar: "منشوريا الخضار", price: "1.800" },
            { name_en: "Paneer Chilly", name_ar: "بانير تشيلي", price: "1.800" },
            { name_en: "Gobi Chilly", name_ar: "جوبي تشيلي", price: "1.800" },
            { name_en: "Chilly Mushroom", name_ar: "مشروم بارد", price: "1.800" },
            { name_en: "Garlic Paneer", name_ar: "بانير الثوم", price: "1.800" },
            { name_en: "Ginger Gobi", name_ar: "الزنجبيل جوبي", price: "1.800" },
            { name_en: "Garlic Gobi", name_ar: "جوبي الثوم", price: "1.800" },
            { name_en: "Idly Manchurian", name_ar: "منشوريا الخامل", price: "1.800" },
            { name_en: "Pepper Mushroom", name_ar: "فطر بالفلفل", price: "1.800" }
        ]
    },
    {
        id: "fresh_juice",
        name_en: "Fresh Juice Items",
        name_ar: "عصائر طازجة",
        icon: "🥤",
        items: [
            { name_en: "Lassi (Sweet & Salt)", name_ar: "لاسي (حلو و مملح)", price: "0.800" },
            { name_en: "Orange Juice (Fresh)", name_ar: "عصير البرتقال", price: "0.900" },
            { name_en: "Apple Juice (Fresh)", name_ar: "عصير تفاح (طازج)", price: "0.900" },
            { name_en: "Strawberry Juice (Fresh)", name_ar: "عصير فراولة (طازج)", price: "1.000" },
            { name_en: "Mango Juice (Fresh)", name_ar: "عصير مانجو (طازج)", price: "1.000" },
            { name_en: "Mango Lassi", name_ar: "مانجو لاسي", price: "1.000" },
            { name_en: "Cocktail juice (Fresh)", name_ar: "عصير كوكتيل (طازج)", price: "1.000" },
            { name_en: "Guava Juice (Fresh)", name_ar: "عصير جوافة (طازج)", price: "1.000" },
            { name_en: "Watermelon Juice (Fresh)", name_ar: "عصير بطيخ (طازج)", price: "0.900" },
            { name_en: "Pineapple Juice (Fresh)", name_ar: "عصير أناناس (طازج)", price: "1.000" },
            { name_en: "Milk Shake All", name_ar: "ميلك شيك الكل", price: "0.900" },
            { name_en: "Cold Coffee", name_ar: "قهوة باردة", price: "0.900" },
            { name_en: "Lemon Juice", name_ar: "عصير ليمون", price: "0.500" },
            { name_en: "Lemon Juice with Soda", name_ar: "عصير ليمون مع صودا", price: "0.600" },
            { name_en: "Butter Milk", name_ar: "حليب الزبدة", price: "0.400" }
        ]
    },
    {
        id: "dessert",
        name_en: "Desert Items",
        name_ar: "مثلجات وحلويات",
        icon: "🍨",
        items: [
            { name_en: "Vanilla Ice Cream", name_ar: "مثلجات الفانيليا", price: "0.300" },
            { name_en: "Fruit Salad", name_ar: "سلطة فواكه", price: "0.600" },
            { name_en: "Fruit Salad with Ice Cream", name_ar: "سلطة فواكه مع آيس كريم", price: "0.900" },
            { name_en: "Gulab Jamoon with Ice Cream", name_ar: "جلاب جامون مع الآيس كريم", price: "0.600" },
            { name_en: "Gudbud Manalore Spl. (Falooda)", name_ar: "جودبود مانالور سبيشل (فالودة)", price: "1.400" },
            { name_en: "Laddu (1 Pc.)", name_ar: "لادو (1 قطعة)", price: "0.250" },
            { name_en: "Jelebi (1 Pc.)", name_ar: "جاليبي (1 قطعة)", price: "0.250" },
            { name_en: "Thirupathi Laddu", name_ar: "ثيروباثي لادو", price: "0.250" },
            { name_en: "London Dairy (Almond)", name_ar: "لندن ديري (اللوز)", price: "0.700" },
            { name_en: "Igloo Duet (Mango & Vanilla)", name_ar: "إيجلو دويتو (مانجو وفانيليا)", price: "0.300" },
            { name_en: "London Dairy (Peanut Surprise)", name_ar: "لندن ديري (مفاجأة الفول السوداني)", price: "0.400" },
            { name_en: "Igloo Evers Cake", name_ar: "كعكة إيجلو إيفرز", price: "0.200" },
            { name_en: "Malai Kulfi (Stick)", name_ar: "مالاي كولفي (عصا)", price: "0.200" },
            { name_en: "Malai Kulfi", name_ar: "مالاي كولفي", price: "0.400" },
            { name_en: "Igloo Huperloop", name_ar: "إيجلو هايبرلوب", price: "0.400" },
            { name_en: "Igloo Kingcone", name_ar: "إيجلو كينج كون", price: "0.400" },
            { name_en: "Quanta Peanut", name_ar: "كوانتا الفول السوداني", price: "0.400" },
            { name_en: "Quanta Almond", name_ar: "كوانتا اللوج", price: "0.400" },
            { name_en: "Quanta Chocolate Cone", name_ar: "مخروط الشوكولاتة كوانتا", price: "0.400" }
        ]
    }
];

// Translations
const translations = {
    en: {
        hero_line1: "PURE VEGETARIAN",
        hero_line2: "SOUTH & NORTH INDIAN DELICIOUS",
        hero_line3: "CHINESE DISHES",
        menu_categories: "Menu Categories",
        back_to_cat: "Back to Categories",
        catering_msg: "We undertake Out Door Catering & Party Orders",
        mess_msg: "Monthly Mess & Coupon System",
        delivery_msg: "Free Home Delivery Available",
        currency: "OMR"
    },
    ar: {
        hero_line1: "نباتي خالص",
        hero_line2: "مأكولات جنوب وشمال هندية لذيذة",
        hero_line3: "أطباق صينية",
        menu_categories: "قائمة الطعام",
        back_to_cat: "عودة للقائمة",
        catering_msg: "نقوم بتعهدات الحفلات الخارجية والطلبات",
        mess_msg: "نظام الاشتراك الشهري والكوبونات",
        delivery_msg: "توصيل للمنازل مجاناً",
        currency: "ر.ع."
    }
};

// State
let currentLang = 'en';
let currentCategory = null;

// DOM Elements
const app = document.getElementById('app');
const langToggle = document.getElementById('lang-toggle');
const logoBtn = document.getElementById('logo-btn');
const langText = langToggle.querySelector('.lang-text');

// Logic

function init() {
    setupEventListeners();

    // Initial Load Logic
    const hash = window.location.hash.substring(1);
    if (hash) {
        const cat = menuData.find(c => c.id === hash);
        if (cat) {
            renderItems(hash, false);
            // Ensure state is correct for back/forward navigation
            if (!history.state || history.state.view !== 'items') {
                 history.replaceState({ view: 'items', categoryId: hash }, '', `#${hash}`);
            }
        } else {
            history.replaceState({ view: 'home' }, '', '#');
            renderHome(false);
        }
    } else {
        history.replaceState({ view: 'home' }, '', '#');
        renderHome(false);
    }
}

function setupEventListeners() {
    langToggle.addEventListener('click', toggleLanguage);

    logoBtn.addEventListener('click', () => {
        navigateToHome();
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view === 'items') {
            renderItems(event.state.categoryId, false);
        } else {
            renderHome(false);
        }
    });

    // Touch Swipe to Go Back
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        if (currentCategory && touchEndX - touchStartX > 100) { // Swipe Right (to go back)
            // I will implement logic here if needed for right swipe
        }
        // Implementing user request similar to back navigation via swipe
        if (currentCategory) {
            if (touchStartX - touchEndX > 100) { // Swipe Left (often next, but user requested 'return to categories' on swipe left) or maybe they meant Right.
                // Standard back swipe on iOS is Left-to-Right.
                // User said: "Swiping left on mobile should also return to the Categories view." which usually means Right-to-Left gesture.
                // I will respect the prompt's explicit instruction to swipe LEFT to go back.
                navigateToHome();
            }
        }
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langText.textContent = currentLang === 'en' ? 'عربي' : 'English';
    updateLanguageUI();

    // Re-render current view to update text
    if (currentCategory) {
        renderItems(currentCategory, false);
    } else {
        renderHome(false);
    }
}

function updateLanguageUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

function navigateToHome() {
    if (currentCategory) {
        history.pushState({ view: 'home' }, '', '#');
        renderHome(false);
    }
}

function navigateToCategory(categoryId) {
    history.pushState({ view: 'items', categoryId: categoryId }, '', `#${categoryId}`);
    renderItems(categoryId, false);
}

function renderHome(updateHistory = true) {
    currentCategory = null;
    window.scrollTo(0, 0);

    const heroTemplate = document.getElementById('hero-template');
    const categoriesTemplate = document.getElementById('categories-template');

    app.innerHTML = '';
    app.appendChild(heroTemplate.content.cloneNode(true));
    app.appendChild(categoriesTemplate.content.cloneNode(true));

    const grid = document.getElementById('categories-grid');

    menuData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => navigateToCategory(cat.id);

        const name = currentLang === 'en' ? cat.name_en : cat.name_ar;

        card.innerHTML = `
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${name}</div>
    `;
        grid.appendChild(card);
    });

    updateLanguageUI();
}

function renderItems(categoryId, updateHistory = true) {
    const category = menuData.find(c => c.id === categoryId);
    if (!category) return renderHome();

    currentCategory = categoryId;
    window.scrollTo(0, 0);

    const itemsTemplate = document.getElementById('items-template');
    app.innerHTML = '';
    app.appendChild(itemsTemplate.content.cloneNode(true));

    const titleEl = document.getElementById('category-title');
    titleEl.textContent = currentLang === 'en' ? category.name_en : category.name_ar;

    const backBtn = document.getElementById('back-btn');
    backBtn.onclick = () => {
        navigateToHome();
    }

    const list = document.getElementById('items-list');

    category.items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';

        const name = currentLang === 'en' ? item.name_en : item.name_ar;
        const price = item.price;
        const currency = translations[currentLang].currency;

        itemCard.innerHTML = `
      <div class="item-info">
        <div class="item-name">${name}</div>
      </div>
      <div class="item-price">${price} ${currency}</div>
    `;
        list.appendChild(itemCard);
    });

    updateLanguageUI();
}

// Initial Load
// Initialize App
init();
