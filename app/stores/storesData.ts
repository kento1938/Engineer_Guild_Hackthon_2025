// Dummy data for the store list

type Store = {
    name: string;
    address: string;
    phone: string;
    hours: string;
    lat: number;
    lng: number;
    hasDiscount: boolean;
  };
  
  export const storeData: Store[] = [
    // 🔹 東京の店舗
    { name: "東京エコフード 渋谷店", address: "東京都渋谷区渋谷1-1-1", phone: "03-1234-5678", hours: "9:00-22:00", lat: 35.6613, lng: 139.7034, hasDiscount: true },
    { name: "東京エコフード 新宿店", address: "東京都新宿区新宿2-2-2", phone: "03-2345-6789", hours: "10:00-21:00", lat: 35.6938, lng: 139.7034, hasDiscount: true },
    { name: "東京エコフード 池袋店", address: "東京都豊島区池袋3-3-3", phone: "03-3456-7890", hours: "9:00-23:00", lat: 35.728, lng: 139.7104, hasDiscount: false },
    { name: "東京エコフード 上野店", address: "東京都台東区上野4-5-6", phone: "03-1111-2222", hours: "10:00-20:00", lat: 35.7138, lng: 139.7770, hasDiscount: true },
    { name: "東京エコフード 銀座店", address: "東京都中央区銀座7-8-9", phone: "03-3333-4444", hours: "11:00-22:00", lat: 35.6717, lng: 139.7642, hasDiscount: false },
  
    // 🔹 千葉の店舗
    { name: "千葉エコフード 船橋店", address: "千葉県船橋市本町1-1-1", phone: "047-123-4567", hours: "9:00-21:00", lat: 35.694, lng: 139.982, hasDiscount: true },
    // 🔹 船橋周辺の5店舗
    { name: "千葉エコフード 船橋北口店", address: "千葉県船橋市本町2-2-2", phone: "047-411-2222", hours: "9:00-21:00", lat: 35.7014, lng: 139.9834, hasDiscount: true },
    { name: "千葉エコフード 船橋南口店", address: "千葉県船橋市本町3-3-3", phone: "047-422-3333", hours: "10:00-22:00", lat: 35.6987, lng: 139.9852, hasDiscount: false },
    { name: "千葉エコフード 西船橋店", address: "千葉県船橋市西船4-4-4", phone: "047-433-4444", hours: "8:30-20:30", lat: 35.7075, lng: 139.9608, hasDiscount: true },
    { name: "千葉エコフード 東船橋店", address: "千葉県船橋市東船橋5-5-5", phone: "047-444-5555", hours: "9:00-21:30", lat: 35.6992, lng: 140.0021, hasDiscount: true },
    { name: "千葉エコフード 南船橋店", address: "千葉県船橋市浜町1-6-1", phone: "047-455-6666", hours: "10:00-22:00", lat: 35.6817, lng: 139.9886, hasDiscount: false },

    { name: "千葉エコフード 千葉中央店", address: "千葉県千葉市中央区中央1-1-1", phone: "043-234-5678", hours: "10:00-20:00", lat: 35.6075, lng: 140.1065, hasDiscount: false },
    { name: "千葉エコフード 松戸店", address: "千葉県松戸市松戸1-1-1", phone: "047-345-6789", hours: "9:00-22:00", lat: 35.7835, lng: 139.9008, hasDiscount: true },
    { name: "千葉エコフード 柏店", address: "千葉県柏市柏5-6-7", phone: "04-7189-0011", hours: "9:30-20:30", lat: 35.8547, lng: 139.9700, hasDiscount: true },
    { name: "千葉エコフード 成田店", address: "千葉県成田市成田1-1-1", phone: "0476-123-9876", hours: "10:00-21:00", lat: 35.7633, lng: 140.3917, hasDiscount: true },
  
    // 🔹 神奈川の店舗
    { name: "神奈川エコフード 横浜店", address: "神奈川県横浜市西区南幸1-1-1", phone: "045-123-4567", hours: "9:00-22:00", lat: 35.465, lng: 139.622, hasDiscount: true },
    { name: "神奈川エコフード 川崎店", address: "神奈川県川崎市川崎区駅前2-2-2", phone: "044-234-5678", hours: "10:00-21:00", lat: 35.530, lng: 139.703, hasDiscount: false },
    { name: "神奈川エコフード 藤沢店", address: "神奈川県藤沢市藤沢3-3-3", phone: "0466-345-6789", hours: "9:00-23:00", lat: 35.336, lng: 139.485, hasDiscount: true },
    { name: "神奈川エコフード 小田原店", address: "神奈川県小田原市栄町4-5-6", phone: "0465-567-8901", hours: "8:30-21:00", lat: 35.255, lng: 139.154, hasDiscount: true },
    { name: "神奈川エコフード 茅ヶ崎店", address: "神奈川県茅ヶ崎市幸町1-1-1", phone: "0467-789-0123", hours: "10:00-22:00", lat: 35.332, lng: 139.404, hasDiscount: false },
  
    // 🔹 埼玉の店舗
    { name: "埼玉エコフード さいたま店", address: "埼玉県さいたま市大宮区桜木町1-1-1", phone: "048-123-4567", hours: "9:00-22:00", lat: 35.906, lng: 139.622, hasDiscount: true },
    { name: "埼玉エコフード 川越店", address: "埼玉県川越市新富町2-2-2", phone: "049-234-5678", hours: "10:00-21:00", lat: 35.925, lng: 139.485, hasDiscount: false },
    { name: "埼玉エコフード 所沢店", address: "埼玉県所沢市東町3-3-3", phone: "04-3456-7890", hours: "9:00-23:00", lat: 35.799, lng: 139.469, hasDiscount: true },
    { name: "埼玉エコフード 春日部店", address: "埼玉県春日部市中央4-5-6", phone: "048-567-8901", hours: "8:30-21:00", lat: 35.976, lng: 139.746, hasDiscount: true },
    { name: "埼玉エコフード 熊谷店", address: "埼玉県熊谷市銀座1-1-1", phone: "048-678-9012", hours: "10:00-22:00", lat: 36.147, lng: 139.390, hasDiscount: false },
  ];