# ---- Build Stage ----
FROM maven:3.9.9-eclipse-temurin-22 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
COPY src ./src

# Build the JAR (skip tests for speed)
RUN mvn clean package -DskipTests

# ---- Run Stage ----
FROM openjdk:22-jdk

WORKDIR /app

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
