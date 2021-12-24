```java
class Solution {
    List<List<Integer>> output = new ArrayList<>();
    int n, k;

    public void backtack(int first, ArrayList<Integer> curr, int[] nums) {
        if(curr.size() == k) {
            output.add(new ArrayList(curr));
            return;
        }
        for(int i = first; i < n; i++) {
            curr.add(nums[i]);
            backtack(i + 1, curr, nums);
            curr.remove(curr.size() - 1);
        }
    }

    public List<List<Integer>> subsets(int[] nums) {
        n = nums.length;
        for(k = 0; k < n; k++) {
            backtrack(0, new ArrayList<Integer>(), nums);
        }
        return output;
    }
}
```
```java
public void backtrack(List<List<Integer>> list, List<Integer> current, int[] nums, int start) {
    list.add(new ArrayList<>(current));
    for(int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(list, current, nums, i + 1);
        current.remove(current.size() - 1);
    }
}
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(result, new ArrayList<Integer>(), nums, 0);
    return result;
}
```

SELECT sI.pairID, sI.flowcellID, sI.testType, sI.yieldMB, sI.numReads, sI.perQ30Bases, sI.peralignment, sI.perPCRdup,
        sI.perAlignedUnique, sI.snpTiTvRatio, sI.sampleID, sI.annotateID, sI.filterID, sI.postprocID, sI.gender,
        sI.notes, sI.time, sI.analysisFinishedTime, sI.postprocID, sI.diagnosis,
        sI.diagnosisFound, sI.geneDiscovery, sI.meanCvgGP, sI.uniformityCvgGP, sI.nSNPGP, sI.nINDELGP, sI.perbasesAbove1XGP,
        sI.perbasesAbove10XGP, sI.perbasesAbove20XGP, sI.perbasesAbove30XGP, sI.genePanelVer, sI.pipeID, sI.pipeThing1Ver,
        sI.pipeHPFVer, sI.webVer, sI.displayed_at, sI.machine, sI.currentStatus,sI.specimen,sI.tmb_pct10,sI.tmb_pct10_np,sI.tmb_pct5_np,
        sS.din, sI.captureKit
FROM
    sampleInfo sI, sampleSheet sS
WHERE sI.sampleID = '$mysampleID' AND sI.postprocID = '$mypostprocID1' AND sI.sampleID = sS.sampleID  AND sI.flowcellID = sS.flowcell_ID;

SELECT sI.pairID, sI.flowcellID, sI.testType, sI.yieldMB, sI.numReads, sI.perQ30Bases, sI.peralignment, sI.perPCRdup,
        sI.perAlignedUnique, sI.snpTiTvRatio, sI.sampleID, sI.annotateID, sI.filterID, sI.postprocID, sI.gender,
        sI.notes, sI.time, sI.analysisFinishedTime, sI.postprocID, sI.diagnosis,
        sI.diagnosisFound, sI.geneDiscovery, sI.meanCvgGP, sI.uniformityCvgGP, sI.nSNPGP, sI.nINDELGP, sI.perbasesAbove1XGP,
        sI.perbasesAbove10XGP, sI.perbasesAbove20XGP, sI.perbasesAbove30XGP, sI.genePanelVer, sI.pipeID, sI.pipeThing1Ver,
        sI.pipeHPFVer, sI.webVer, sI.displayed_at, sI.machine, sI.currentStatus,sI.specimen,sI.tmb_pct10,sI.tmb_pct10_np,
        sI.tmb_pct5_np,sS.din, 
        IFNULL(sI.captureKit, 'NA') as capture_kit
FROM
    sampleInfo sI, sampleSheet sS
WHERE sI.sampleID = '$mysampleID' AND sI.postprocID = '$mypostprocID1' AND sI.sampleID = sS.sampleID  AND sI.flowcellID = sS.flowcell_ID;";
// WHERE sI.sampleID = '$mysampleID' AND sI.postprocID = '$mypostprocID1';

The GLIS test codes are listed below:
K048010 - Cancer NGS Panel - Germline - SNV/Indels
K048020 - Cancer NGS Panel - Germline - CNV
K048110 - Cancer NGS Panel - Tumour - SNV/Indels
K048120 - Cancer NGS Panel - Tumour – CNV
 