/** 日付の型。作ってみたものの、あまりメリットがないので使用していない。 */
// export type DateType = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type ActivityId = string;

export type ActivitiesItem = {
  /** ユニークなID */
  id: ActivityId;
  /** 名前 */
  name: string;
  /** 日付 */
  date: string;
  /** 詳細 */
  description: string;
  /** 距離 */
  distance: number;
  /** 使用したパーツ */
  parts: PartsId[];
  /** 使用したセット */
  sets: SetId[];
};

/** パーツのID */
export type PartsId = string;

/**
 * パーツの情報を保持する型。
 * 永続化する情報だけとして、計算可能な値は含めない。
 * TODO: 使用開始日を追加
 */
export type PartsItem = {
  /** ユニークなID */
  id: PartsId;
  /** 名前 */
  name: string;
  /** 詳細 */
  description: string;
  /** 種類 */
  kind?: string;
  /** 使用限界距離 */
  limit?: number;
  /** アイコン */
  // icon:string;
  /** 使用開始日 */
  startDate?: string;
  /** 無効フラグ */
  invalid?: boolean;
};

/**
 * パーツのデータ。
 * PartsItem に、計算した値を加えて保持する。
 */
export type PartsItemData = PartsItem & {
  /** 累積距離 */
  distance: number;
  /** パーツが含まれるセットのリスト */
  // sets: SetId[];
};

// ---------------------------------------------------------------
// セット関係
// ---------------------------------------------------------------

/** セットのID */
export type SetId = string;

/**
 * セットの情報を保持する型
 */
export type ItemSet = {
  /** ユニークなID */
  id: SetId;
  /** 名前 */
  name: string;
  /** 含むパーツの一覧 */
  parts: PartsId[];
};

// ---------------------------------------------------------------
// データ関係
// ---------------------------------------------------------------

/** データファイルの型 */
export type DataFileType = {
  activities: ActivitiesItem[];
  parts: PartsItem[];
  sets: ItemSet[];
};

export type DataType = {
  activities: ActivitiesItem[];
  parts: PartsItemData[];
  sets: ItemSet[];
};
