// questions.js — 24 preguntas de Pandas: DataFrame y Estadística Descriptiva
// Enunciados y código tomados de la versión original (index_original.html)
// Total: 24 preguntas — 50 puntos

const QUIZ_SECTIONS = [
  { id: 1, name: "Creación e Inspección de DataFrames",          abbrev: "Inspección", color: "#3B82F6" },
  { id: 2, name: "Estadística Descriptiva (Nivel DataFrame)",     abbrev: "DataFrame",  color: "#8B5CF6" },
  { id: 3, name: "Estadística Descriptiva (Aplicada a Columnas)", abbrev: "Columnas",   color: "#10B981" },
  { id: 4, name: "Estadísticas entre Columnas / Ejes",            abbrev: "Ejes",       color: "#F59E0B" },
];

const QUIZ_QUESTIONS = [
  // ─── Creación e Inspección de DataFrames ───────────────
  {
    id: 1, section: 1, points: 2,
    topic: "Importar Pandas",
    question: "Importa la librería Pandas con su alias estándar `pd`.",
    code: "[[1]] pandas [[2]] pd # Rellena: Comando para importar pandas como pd\nprint(\"Pandas importado\")",
    blanks: [
      { id: 1, options: ["import", "from", "include", "require"], correct: "import" },
      { id: 2, options: ["as", "import", "alias", "="], correct: "as" },
    ],
  },
  {
    id: 2, section: 1, points: 2,
    topic: "Crear un DataFrame",
    question: "Crea un DataFrame (la estructura tabular principal de Pandas) a partir de un diccionario.",
    code: "import pandas as pd\ndatos_dict = {'col_A': [10, 20], 'col_B': [30, 40]}\ndf = pd.[[1]](datos_dict) # Rellena: Función para crear un DataFrame\nprint(df) # Debería mostrar una tabla de 2 filas y 2 columnas (col_A, col_B)",
    blanks: [
      { id: 1, options: ["DataFrame", "Series", "dataframe", "Table"], correct: "DataFrame" },
    ],
  },
  {
    id: 3, section: 1, points: 2,
    topic: "Dimensiones del DataFrame",
    question: "Obtén las dimensiones (número de filas y columnas) del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'X': [1, 2, 3], 'Y': [4, 5, 6]}\ndf = pd.DataFrame(data)\nforma = df.[[1]] # Rellena: Atributo para obtener la forma (filas, columnas)\nprint(f\"Filas: {forma[0]}, Columnas: {forma[1]}\") # Debería ser 3, 2",
    blanks: [
      { id: 1, options: ["shape", "size", "len", "dim"], correct: "shape" },
    ],
  },
  {
    id: 4, section: 1, points: 2,
    topic: "Nombres de las columnas",
    question: "Obtén los nombres de las columnas del DataFrame `df` (pandas los devuelve en un objeto `Index`).",
    code: "import pandas as pd\ndata = {'Producto': ['A', 'B'], 'Precio': [10, 20]}\ndf = pd.DataFrame(data)\ncolumnas = df.[[1]] # Rellena: Atributo para obtener los nombres de columna\nprint(columnas) # Debería mostrar Index(['Producto', 'Precio'], ...)",
    blanks: [
      { id: 1, options: ["columns", "index", "keys", "names"], correct: "columns" },
    ],
  },
  {
    id: 5, section: 1, points: 2,
    topic: "Tipos de datos (DataFrame)",
    question: "Obtén los tipos de datos (dtypes) de cada columna en el DataFrame `df`.",
    code: "import pandas as pd\ndata = {'edad': [25, 30], 'altura_m': [1.75, 1.80], 'nombre': ['Ana', 'Luis']}\ndf = pd.DataFrame(data)\ntipos = df.[[1]] # Rellena: Atributo para obtener los tipos de datos\nprint(tipos) # edad: entero, altura_m: decimal, nombre: texto",
    blanks: [
      { id: 1, options: ["dtypes", "types", "dtype", "info"], correct: "dtypes" },
    ],
  },
  {
    id: 6, section: 1, points: 2,
    topic: "Información general del DataFrame",
    question: "Muestra un resumen conciso del DataFrame `df`, incluyendo el índice, columnas, tipos de datos, valores no nulos y uso de memoria.",
    code: "import pandas as pd\nimport numpy as np\ndata = {'A': [1, 2, np.nan], 'B': [4.0, 5.5, 6.0]}\ndf = pd.DataFrame(data)\ndf.[[1]]() # Rellena: Método para obtener información general",
    blanks: [
      { id: 1, options: ["info", "describe", "head", "summary"], correct: "info" },
    ],
  },

  // ─── Estadística Descriptiva (Nivel DataFrame) ─────────
  {
    id: 7, section: 2, points: 2,
    topic: "Resumen descriptivo general",
    question: "Genera un resumen estadístico completo (conteo, media, desviación estándar, mínimo, cuartiles, máximo) para todas las columnas numéricas del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Edad': [22, 25, 30], 'Puntaje': [85, 90, 88]}\ndf = pd.DataFrame(data)\nresumen = df.[[1]]() # Rellena: Método para obtener el resumen descriptivo\nprint(resumen)",
    blanks: [
      { id: 1, options: ["describe", "info", "summary", "stats"], correct: "describe" },
    ],
  },
  {
    id: 8, section: 2, points: 2,
    topic: "Media de todas las columnas",
    question: "Calcula la media (promedio) para cada columna numérica del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'A': [10, 20], 'B': [100, 200], 'C': [1, 3]}\ndf = pd.DataFrame(data)\nmedias_df = df.[[1]]() # Rellena: Método para calcular la media por columna\nprint(medias_df) # Debería ser A: 15.0, B: 150.0, C: 2.0",
    blanks: [
      { id: 1, options: ["mean", "average", "avg", "max"], correct: "mean" },
    ],
  },
  {
    id: 9, section: 2, points: 2,
    topic: "Suma de todas las columnas",
    question: "Calcula la suma de los valores para cada columna numérica del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Ventas_Ene': [100, 150], 'Ventas_Feb': [110, 140]}\ndf = pd.DataFrame(data)\nsumas_df = df.[[1]]() # Rellena: Método para calcular la suma por columna\nprint(sumas_df) # Debería ser Ventas_Ene: 250, Ventas_Feb: 250",
    blanks: [
      { id: 1, options: ["sum", "total", "add", "cumsum"], correct: "sum" },
    ],
  },
  {
    id: 10, section: 2, points: 2,
    topic: "Conteo de no nulos por columna",
    question: "Cuenta cuántos valores no nulos (no NaN) hay en cada columna del DataFrame `df`.",
    code: "import pandas as pd\nimport numpy as np\ndata = {'A': [1, np.nan, 3], 'B': [4, 5, 6]}\ndf = pd.DataFrame(data)\nconteo_no_nulos = df.[[1]]() # Rellena: Método para contar valores no nulos por columna\nprint(conteo_no_nulos) # Debería ser A: 2, B: 3",
    blanks: [
      { id: 1, options: ["count", "len", "isnull", "size"], correct: "count" },
    ],
  },

  // ─── Estadística Descriptiva (Aplicada a Columnas) ─────
  {
    id: 11, section: 3, points: 2,
    topic: "Media de una columna específica",
    question: "Calcula la media (promedio) únicamente para la columna 'Edad' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Nombre': ['A', 'B', 'C'], 'Edad': [20, 30, 40]}\ndf = pd.DataFrame(data)\nmedia_edad = df['Edad'].[[1]]() # Rellena: Método para calcular la media de la columna\nprint(media_edad) # Debería ser 30.0",
    blanks: [
      { id: 1, options: ["mean", "max", "avg", "average"], correct: "mean" },
    ],
  },
  {
    id: 12, section: 3, points: 2,
    topic: "Mediana de una columna específica",
    question: "Calcula la mediana para la columna 'Salario' del DataFrame `df`. (Con una cantidad par de datos, la mediana es el promedio de los dos valores centrales).",
    code: "import pandas as pd\ndata = {'Empleado': [1, 2, 3, 4], 'Salario': [3000, 3200, 2800, 5000]}\ndf = pd.DataFrame(data)\nmediana_salario = df['Salario'].[[1]]() # Rellena: Método para calcular la mediana de la columna\nprint(mediana_salario) # Debería ser 3100.0",
    blanks: [
      { id: 1, options: ["median", "mean", "middle", "mode"], correct: "median" },
    ],
  },
  {
    id: 13, section: 3, points: 2,
    topic: "Moda de una columna específica",
    question: "Encuentra el valor más frecuente (moda) en la columna 'Ciudad' del DataFrame `df`. (El método devuelve todas las modas en una Serie; con `[0]` se toma la primera).",
    code: "import pandas as pd\ndata = {'Ciudad': ['A', 'B', 'A', 'C', 'B', 'A']}\ndf = pd.DataFrame(data)\nmoda_ciudad = df['Ciudad'].[[1]]()[0] # Rellena: Método para calcular la moda ([0] toma el primer valor)\nprint(moda_ciudad) # Debería ser 'A'",
    blanks: [
      { id: 1, options: ["mode", "median", "max", "nunique"], correct: "mode" },
    ],
  },
  {
    id: 14, section: 3, points: 2,
    topic: "Suma de una columna específica",
    question: "Calcula la suma total de los valores en la columna 'Ventas' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Mes': ['Ene', 'Feb'], 'Ventas': [5000, 6500]}\ndf = pd.DataFrame(data)\ntotal_ventas = df['Ventas'].[[1]]() # Rellena: Método para calcular la suma de la columna\nprint(total_ventas) # Debería ser 11500",
    blanks: [
      { id: 1, options: ["sum", "total", "cumsum", "count"], correct: "sum" },
    ],
  },
  {
    id: 15, section: 3, points: 2,
    topic: "Desviación estándar de una columna",
    question: "Calcula la desviación estándar muestral (medida de dispersión; pandas divide entre n − 1 por defecto) para la columna 'Notas' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Estudiante': [1, 2, 3], 'Notas': [7, 8, 9]}\ndf = pd.DataFrame(data)\nstd_notas = df['Notas'].[[1]]() # Rellena: Método para calcular la desviación estándar\nprint(round(std_notas, 2)) # Debería ser 1.0",
    blanks: [
      { id: 1, options: ["std", "deviation", "stdev", "dev"], correct: "std" },
    ],
  },
  {
    id: 16, section: 3, points: 2,
    topic: "Valor mínimo de una columna",
    question: "Encuentra el valor mínimo en la columna 'Precio' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Producto': ['X', 'Y', 'Z'], 'Precio': [50, 45, 60]}\ndf = pd.DataFrame(data)\nmin_precio = df['Precio'].[[1]]() # Rellena: Método para encontrar el mínimo\nprint(min_precio) # Debería ser 45",
    blanks: [
      { id: 1, options: ["min", "idxmin", "minimum", "low"], correct: "min" },
    ],
  },
  {
    id: 17, section: 3, points: 2,
    topic: "Valor máximo de una columna",
    question: "Encuentra el valor máximo en la columna 'Cantidad' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Item': [1, 2, 3], 'Cantidad': [100, 250, 180]}\ndf = pd.DataFrame(data)\nmax_cantidad = df['Cantidad'].[[1]]() # Rellena: Método para encontrar el máximo\nprint(max_cantidad) # Debería ser 250",
    blanks: [
      { id: 1, options: ["max", "idxmax", "maximum", "top"], correct: "max" },
    ],
  },
  {
    id: 18, section: 3, points: 2,
    topic: "Contar valores únicos en columna",
    question: "Calcula cuántos valores *únicos* diferentes existen en la columna 'Categoria' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Categoria': ['A', 'B', 'A', 'C', 'B', 'A']}\ndf = pd.DataFrame(data)\nn_unicos = df['Categoria'].[[1]]() # Rellena: Método para contar valores únicos\nprint(n_unicos) # Debería ser 3 (A, B, C)",
    blanks: [
      { id: 1, options: ["nunique", "unique", "count", "value_counts"], correct: "nunique" },
    ],
  },
  {
    id: 19, section: 3, points: 2,
    topic: "Frecuencia de valores en columna",
    question: "Obtén la frecuencia (conteo) de cada valor único en la columna 'Tipo' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Tipo': ['X', 'Y', 'X', 'Z', 'Y', 'X']}\ndf = pd.DataFrame(data)\nfrecuencias = df['Tipo'].[[1]]() # Rellena: Método para obtener el conteo de valores\nprint(frecuencias) # Debería ser X: 3, Y: 2, Z: 1",
    blanks: [
      { id: 1, options: ["value_counts", "count", "nunique", "unique"], correct: "value_counts" },
    ],
  },
  {
    id: 20, section: 3, points: 2,
    topic: "Calcular un cuantil (percentil)",
    question: "Calcula el percentil 75 (cuantil 0.75) para la columna 'Puntos' del DataFrame `df`. (Pandas interpola linealmente entre los datos, por eso el resultado puede no ser un valor de la columna).",
    code: "import pandas as pd\ndata = {'Puntos': [10, 20, 30, 40, 50, 60, 70, 80]}\ndf = pd.DataFrame(data)\np75 = df['Puntos'].[[1]](0.75) # Rellena: Método para calcular el cuantil\nprint(p75) # Debería ser 62.5",
    blanks: [
      { id: 1, options: ["quantile", "percentile", "quartile", "describe"], correct: "quantile" },
    ],
  },

  // ─── Estadísticas entre Columnas / Ejes ────────────────
  {
    id: 21, section: 4, points: 3,
    topic: "Media por fila",
    question: "Calcula la media de los valores numéricos para cada fila del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Prueba1': [8, 9], 'Prueba2': [7, 10], 'Prueba3': [9, 8]}\ndf = pd.DataFrame(data)\nmedia_filas = df.[[1]](axis=1) # Rellena: Método para calcular la media (axis=1 → un resultado por cada fila)\nprint(media_filas) # Debería ser fila 0: 8.0, fila 1: 9.0",
    blanks: [
      { id: 1, options: ["mean", "sum", "max", "avg"], correct: "mean" },
    ],
  },
  {
    id: 22, section: 4, points: 3,
    topic: "Suma por fila",
    question: "Calcula la suma de los valores numéricos para cada fila del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Gasto1': [100, 200], 'Gasto2': [50, 75]}\ndf = pd.DataFrame(data)\nsuma_filas = df.[[1]](axis=1) # Rellena: Método para calcular la suma (axis=1 → un resultado por cada fila)\nprint(suma_filas) # Debería ser fila 0: 150, fila 1: 275",
    blanks: [
      { id: 1, options: ["sum", "mean", "cumsum", "add"], correct: "sum" },
    ],
  },
  {
    id: 23, section: 4, points: 2,
    topic: "Correlación entre columnas",
    question: "Calcula la matriz de correlación de Pearson entre todas las columnas numéricas del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'A': [1, 2, 3], 'B': [2, 4, 7], 'C': [5, 3, 1]}\ndf = pd.DataFrame(data)\nmatriz_corr = df.[[1]]() # Rellena: Método para calcular la correlación\nprint(matriz_corr) # Matriz 3x3: diagonal 1.0; A y C dan -1.0",
    blanks: [
      { id: 1, options: ["corr", "cov", "pearson", "correlation"], correct: "corr" },
    ],
  },
  {
    id: 24, section: 4, points: 2,
    topic: "Índice del valor máximo en columna",
    question: "Encuentra la etiqueta del índice (el nombre del estudiante) donde se encuentra el valor máximo de la columna 'Puntaje' del DataFrame `df`.",
    code: "import pandas as pd\ndata = {'Puntaje': [85, 95, 90]}\ndf = pd.DataFrame(data, index=['Juan', 'Ana', 'Luis'])\nindice_max = df['Puntaje'].[[1]]() # Rellena: Método para obtener el índice del máximo\nprint(indice_max) # Debería ser 'Ana'",
    blanks: [
      { id: 1, options: ["idxmax", "max", "argmax_index", "index"], correct: "idxmax" },
    ],
  },
];
