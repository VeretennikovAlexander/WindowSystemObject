set PATH=%PATH%;.
set CLASSPATH=%CLASSPATH%;.;./jacob.jar
javac %1.java
java %1

rem pause

del %1*.class
del WSOTest*.class