import { useState } from 'react';

export type Gender = 'male' | 'female';
export type ActivityLevel = '1.2' | '1.375' | '1.55' | '1.725' | '1.9';

interface CalculationResult {
    bmr: number;
    tdee: number;
}

export const useCalorieCalculator = () => {
    const [gender, setGender] = useState<Gender>('male');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activity, setActivity] = useState<ActivityLevel>('1.2');
    const [result, setResult] = useState<CalculationResult | null>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);
        const act = parseFloat(activity);

        if (isNaN(w) || isNaN(h) || isNaN(a)) return;

        // Fórmula de Mifflin-St Jeor
        let bmr = 10 * w + 6.25 * h - 5 * a;
        if (gender === 'male') {
            bmr += 5;
        } else {
            bmr -= 161;
        }

        const tdee = bmr * act;
        setResult({
            bmr: Math.round(bmr),
            tdee: Math.round(tdee)
        });
    };

    return {
        gender,
        setGender,
        age,
        setAge,
        weight,
        setWeight,
        height,
        setHeight,
        activity,
        setActivity,
        result,
        calculate
    };
};
