var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? Array.Empty<string>();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigins.Length > 0 ? allowedOrigins : ["http://localhost:5173"])
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();

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
