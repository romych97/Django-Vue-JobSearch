# Generated by Django 4.0.4 on 2022-05-08 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_alter_account_birthdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='birthdate',
            field=models.DateField(),
        ),
    ]