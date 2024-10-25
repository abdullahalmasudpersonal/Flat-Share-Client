
  export const topCounterFunction = (num: number | null | undefined): string => {
    if (!num && num !== 0) {
      return '0000K'; // যদি num undefined বা null হয়, ডিফল্ট মান দেখাবে
    }
  
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).padStart(4, '0') + 'M'; // 1 মিলিয়নের বেশি হলে M
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).padStart(4, '0') + 'K'; // 1 হাজারের বেশি হলে K
    } else {
      return num.toFixed(1).padStart(4, '0') + 'K'; // 1000 এর নিচে হলে 'K' যোগ করা হবে
    }
  };
  