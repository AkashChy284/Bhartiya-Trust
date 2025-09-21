# Stage 1: Build with Maven
FROM maven:3.9.9-eclipse-temurin-22 AS build
WORKDIR /app

# Copy only pom.xml first (better for caching)
COPY pom.xml .

# Copy source code
COPY src ./src

# Build the JAR (skip tests for faster builds)
RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM openjdk:22-jdk
WORKDIR /app

# Copy built jar from Maven build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the Spring Boot default port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
