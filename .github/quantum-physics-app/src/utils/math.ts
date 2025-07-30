export function calculateWaveFunction(amplitude: number, phase: number): number {
    return amplitude * Math.cos(phase);
}

export function normalizeVector(vector: number[]): number[] {
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    return vector.map(val => val / magnitude);
}