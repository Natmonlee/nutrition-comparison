class Food {
  [key: string]: string | undefined;
  constructor(
    public FoodName: string,
    public Measure: string,
    public Weight_g: string,
    public Energy_kcal: string,
    public Energy_kj: string,
    public Protein_g: string,
    public Carbohydrate_g: string,
    public TotalSugar_g: string,
    public TotalDietaryFibre_g: string,
    public TotalFat_g: string,
    public Calcium_mg: string,
    public Iron_mg: string,
    public Sodium_mg: string,
    public Potassium_mg: string,
    public Magnesium_mg: string,
    public Phosphorus_mg: string,
    public VitaminARAE: string,
    public BetaCarotene_mcg: string,
    public Lycopene_mcg: string,
    public FolateDFE: string,
    public VitaminC_mg: string,
    public VitaminB12_mcg: string,
    public color?: string
  ) {}
}

export default Food;
