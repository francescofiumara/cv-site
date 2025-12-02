# ======================
# STAGE 1: build
# ======================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copia il csproj e fai restore
COPY ["api.csproj", "./"]
RUN dotnet restore "api.csproj"

# copia il resto del codice
COPY . .

# publish in /app/publish
RUN dotnet publish "api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# ======================
# STAGE 2: runtime
# ======================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# copia gli artifact pubblicati
COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Production

# avvia l'app
ENTRYPOINT ["dotnet", "api.dll"]
