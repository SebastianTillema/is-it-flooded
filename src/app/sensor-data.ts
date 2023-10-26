export interface SensorData {
    success: boolean
    forStore: ForStore[]
    forGrid: ForGrid[]
    type: string
    features: Feature[]
    auth_check: AuthCheck
    peak_memory_usage: string
    _execution_time: number
}

export interface ForStore {
    name: string
    type: string
}

export interface ForGrid {
    header: string
    dataIndex: string
    type: string
    typeObj: any
}

export interface Feature {
    type: string
    properties: Properties
}

export interface Properties {
    loc_id: number
    ts_info: TsInfo[]
}

export interface TsInfo {
    type: string
    label: string
    value: string
}

export interface AuthCheck {
    success: boolean
    session: any
    auth_level: any
    checked_relations: string[]
}

// helpers
export function getWaterLevel(data: SensorData) {
    return data.features.flatMap(f => f.properties.ts_info
        .filter(i => i.label === "Vandstand")
        .map(i => +i.value.substring(0, 4)))[0]
}