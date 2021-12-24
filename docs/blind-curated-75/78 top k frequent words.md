---
sidebar_label: "77 Top K Frequent Words "
sidebar_position: 77
---
# Leetcode title to be added later
Given a non-empty list of words, return the k most frequent elements. Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
```java
class Solution {
    public List topKFrequent(String[] words, int k) {
        if(words == null || words.length == 0) {
            return Collections.emptyList();
        }
        Map<String, Integer> wordMap = new HashMap<>();
        for(String word : words) {
            int count = wordMap.get(word) == null ? 0 : wordMap.get(word);
            wordMap.put(word, ++count);
        }

        PriorityQueue<PElement> pq = new PriorityQueue<>(new PElementComparator());
        for(Map.Entry<String, Integer> entry: wordMap.entrySet()) {
            PElement p = new PElement(entry.getKey(), entry.getValue());
            pq.add(p);
        }
        List<String> result = new ArrayList<>();
        for(int i = 0; i < k; i++){
            PElement element = pq.poll();
            result.add(element.word);
        }

        return result;
    }

    private static class PElement {
        String word;
        int count;
        public PElement(String word, int count) {
            this.word = word;
            this.count = count;
        }
        public String getWord() {
            return word;
        }
        public int getCount() {
            return count;
        }
    }

    private static class PElementComparator implements Comparator<PElement> {
        public int compare(PElement p1, PElement p2) {
            if( p1 == p2) {
                return 0;
            }
            if(p1.getCount() > p2.getCount()) {
                return -1;
            }
            if(p2.getCount() > p1.getCount()) {
                return 1;
            }
            return p1.getWord().compareTo(p2.getWord());
        }
    }
}
```

```java
public class Solution {
    public static int romanToNumber(String roman) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int n = roman.length();
        int result = map.get(roman.charAt(n - 1));

        for(int i = n - 2; i >= 0; i--) {
            if(map.get(roman.charAt(i)) >= map.get(roman.charAt(i + 1))) {
                result += map.get(roman.charAt(i));
            } else {
                result -= map.get(roman.charAt(i));
            }
        }
        return result;
    }

    public List sortNames(Lis<String> names) {
        List<String[]> list = new ArrayList<>();
        List<String> result = new ArrayList<>();
        for(int i = 0; i < names.size(); i++) {
            int space = names.get(i).lastIndexOf(' ');
            int val = romanToNumber(names.get(i).substring(space + 1));
            String name = names.get(i).substring(0, space);
            list.add(new String[]{name, })
        }
    }
}
```
