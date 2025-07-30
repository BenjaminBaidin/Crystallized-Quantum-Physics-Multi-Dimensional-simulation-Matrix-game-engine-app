export interface QuantumState {
    position: number[];
    momentum: number[];
    spin: number;
}

export interface SimulationParameters {
    timeStep: number;
    totalTime: number;
    initialState: QuantumState;
}