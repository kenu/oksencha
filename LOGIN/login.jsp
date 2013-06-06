<%
	String id = request.getParameter("id");
	String pw = request.getParameter("password");
	System.out.println("id" + id + " pw:" + pw);
	boolean isValid = "testid".equals(id) && "testpass".equals(pw);
%>
{"success":<%= isValid %>}