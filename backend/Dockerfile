# Stage 1: Build with Maven
FROM maven:3.9.9-eclipse-temurin-22 AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
COPY src ./src

# Build the JAR (skip tests for speed)
RUN mvn clean package -DskipTests

# Stage 2: Run the app with JDK
FROM openjdk:22-jdk
WORKDIR /app

# Copy jar from the previous build stage
COPY --from=build /app/target/*.jar app.jar

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
