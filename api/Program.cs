var builder = WebApplication.CreateBuilder(args);

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS: leggi gli allowed origins da configurazione
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() 
                     ?? Array.Empty<string>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins(
                allowedOrigins.Length > 0
                    ? allowedOrigins
                    : new[] { "http://localhost:5173" } // fallback per sviluppo
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// 🔹 Imposta la porta leggendo la variabile d'ambiente PORT (Render la fornisce)
//    Se non c'è, usa 5000 in locale
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
builder.WebHost.UseUrls($"http://0.0.0.0:{port}");

var app = builder.Build();

// Swagger solo in Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS prima delle endpoint
app.UseCors();

// In hosting gestito (Render ecc.) non serve forzare l'HTTPS qui
// app.UseHttpsRedirection();

var projects = new List<Project>
{
    new("Peso-prezzatrice next-gen", "Sviluppo nuova macchina in Bilanciai con stack Linux, SQL Server, .NET e UI in Avalonia per interfaccia operatore.", "Work in progress: feature evolutive e integrazione con linea esistente", [".NET 8", "C#", "SQL Server", "Avalonia", "Linux"]),
    new("Soluzioni Dynamics 365", "Progetti di consulenza con integrazioni custom: API C#, JavaScript per estensioni (planner) e connettori verso servizi interni.", "Delivery di feature su ciclo Agile con team clienti", ["C#", ".NET", "Dynamics 365", "JavaScript"]),
    new("Reporting & dati", "Integrazioni e pipeline dati con Power BI, Azure Functions e Power Apps a supporto dei flussi aziendali.", "Dashboard e automazioni operative", ["Power BI", "Azure Functions", "Power Apps", "SQL"])
};

var skills = new SkillsProfile(
    [".NET", "C#", "ASP.NET Core", "Minimal API"],
    ["React", "TypeScript", "Tailwind", "React Query", "Vite"],
    ["Azure", "SQL Server", "Azure DevOps"],
    ["Clean Architecture", "Code Review", "CI/CD", "Agile"]
);

// Endpoint
app.MapGet("/api/projects", () => Results.Ok(projects))
   .WithName("GetProjects")
   .WithOpenApi();

app.MapGet("/api/skills", () => Results.Ok(skills))
   .WithName("GetSkills")
   .WithOpenApi();

app.Run();

record Project(string Title, string Description, string Impact, string[] Stack);

record SkillsProfile(
    string[] Backend,
    string[] Frontend,
    string[] Cloud,
    string[] Practices
);
