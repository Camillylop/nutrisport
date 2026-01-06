import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, ArrowRight } from 'lucide-react';
import { useCalorieCalculator, Gender, ActivityLevel } from '@/hooks/useCalorieCalculator';

const CalorieCalculator = () => {
    const {
        gender, setGender,
        age, setAge,
        weight, setWeight,
        height, setHeight,
        activity, setActivity,
        result, calculate
    } = useCalorieCalculator();

    return (
        <section id="calculadora" className="py-16 lg:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <p className="text-primary font-semibold uppercase tracking-widest animate-fade-in">
                            Ferramentas
                        </p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                            CALCULE SEU <span className="text-gradient">GASTO CALÓRICO</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Descubra quantas calorias seu corpo precisa para manter, perder ou ganhar peso.
                            Essa estimativa é o primeiro passo para um planejamento nutricional eficiente.
                        </p>

                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                                    <Calculator size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Metabolismo Basal (TMB)</h4>
                                    <p className="text-sm text-muted-foreground">Quanto você gasta apenas para manter as funções vitais.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                                    <Calculator size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Gasto Total Diário (TDEE)</h4>
                                    <p className="text-sm text-muted-foreground">Considera seu nível de atividade física e treino.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl relative z-10">
                        <CardHeader>
                            <CardTitle>Calculadora Nutricional</CardTitle>
                            <CardDescription>Preencha seus dados para realizar o cálculo</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Gênero</Label>
                                    <Select value={gender} onValueChange={(val) => setGender(val as Gender)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Masculino</SelectItem>
                                            <SelectItem value="female">Feminino</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Idade (anos)</Label>
                                    <Input
                                        type="number"
                                        inputMode="decimal"
                                        placeholder="Ex: 30"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Peso (kg)</Label>
                                    <Input
                                        type="number"
                                        inputMode="decimal"
                                        placeholder="Ex: 75.5"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Altura (cm)</Label>
                                    <Input
                                        type="number"
                                        inputMode="decimal"
                                        placeholder="Ex: 175"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Nível de Atividade</Label>
                                <Select value={activity} onValueChange={(val) => setActivity(val as ActivityLevel)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1.2">Sedentário (pouco ou nenhum exercício)</SelectItem>
                                        <SelectItem value="1.375">Levemente ativo (exercício 1-3 dias/semana)</SelectItem>
                                        <SelectItem value="1.55">Moderadamente ativo (exercício 3-5 dias/semana)</SelectItem>
                                        <SelectItem value="1.725">Muito ativo (exercício 6-7 dias/semana)</SelectItem>
                                        <SelectItem value="1.9">Extremamente ativo (trabalho físico pesado ou treino 2x dia)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button onClick={calculate} className="w-full font-bold" size="lg" variant="hero">
                                Calcular Agora
                            </Button>

                            {result && (
                                <div className="mt-6 p-4 bg-muted/50 rounded-lg space-y-4 animate-scale-in border border-primary/20">
                                    <div className="flex justify-between items-center pb-2 border-b border-border">
                                        <span className="text-muted-foreground">Taxa Metabólica Basal:</span>
                                        <span className="text-xl font-bold text-foreground">{result.bmr} kcal</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Gasto Total Diário:</span>
                                        <span className="text-2xl font-bold text-primary">{result.tdee} kcal</span>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-xs text-muted-foreground mb-3 text-center">
                                            *Esta é uma estimativa. Para um plano preciso, agende uma consulta.
                                        </p>
                                        <Button variant="outline" className="w-full text-xs h-8" asChild>
                                            <a href="#contato">
                                                Agendar Consultoria <ArrowRight className="ml-2 h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default CalorieCalculator;
