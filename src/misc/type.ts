import { PartsKind } from "./constants";

/**
 * パーツの情報を保持する型。
 * 永続化する情報だけとして、計算可能な値は含めない。
 */
export type PartsItem = {
  /** 名前 */
  name: string;
  /** 詳細 */
  description: string;
  /** 種類 */
  kind: PartsKind;
  /** 累積距離。データとしては保持せず、必要に応じて計算する */
  // distance: number;
  /** 使用限界距離 */
  limit: number;
};
